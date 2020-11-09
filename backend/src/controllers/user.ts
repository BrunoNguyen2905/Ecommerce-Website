import { Request, Response, NextFunction } from 'express'

import User from '../models/User'
import UserService from '../services/user'

import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

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

//POST /users/create
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password, isAdmin } = req.body
    //check if email exsits
    const emailCheked = await UserService.findUserByEmail(email)
    if(emailCheked) return res.status(409).json({ message: 'Email already in use' })
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      isAdmin,
    })
    await UserService.create(user)
    res.status(200).json({ message: 'Create user successfully', user })
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}
