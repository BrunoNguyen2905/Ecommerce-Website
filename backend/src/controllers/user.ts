import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User'
import UserService from '../services/user'

import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
  UnauthorizedError,
} from '../helpers/apiError'
import { generateToken } from '../middlewares/authentication'

//GET /users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findAll())
  } catch (error) {
    next(new NotFoundError('Users not found', error))
  }
}

// GET /users/:userId
export const findUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findById(req.params.userId))
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

//POST /users/signin
export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body
    const user = await UserService.findUserByEmail(email)
    const passwordChecked = bcrypt.compareSync(password, user!.password)
    if (passwordChecked) {
      const token = generateToken(user)
      return res.status(200).json({
        user: {
          _id: user!._id,
          firstName: user!.firstName,
          lastName: user!.lastName,
          email: user!.email,
          isAdmin: user!.isAdmin,
          token,
        },
        message: 'Log in successfully',
      })
    } else {
      next(new UnauthorizedError('Invalid Password'))
    }
  } catch (error) {
    next(new UnauthorizedError('Invalid Email', error))
  }
}

//POST /users/register
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password, isAdmin } = req.body
    //check if email exsits
    const emailCheked = await UserService.findUserByEmail(email)
    if (emailCheked) next(new UnauthorizedError('Email already in use'))
    const hashedPassword = bcrypt.hashSync(password, 8)
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      isAdmin,
    })
    await UserService.create(user)
    const token = generateToken(user)
    res.status(200).json({
      message: 'Create user successfully',
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      },
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}
