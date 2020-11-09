import { Request, Response, NextFunction } from 'express'

import Product from '../models/Product'
import ProductService from '../services/product'

import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

//GET /products       GET  /products?limit = & page=
export const findAllWithPagination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.query.page && req.query.limit) {
      const page = parseInt((req.query as any).page)
      const limit = parseInt((req.query as any).limit)
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
      const result = await (await ProductService.findAll()).slice(
        startIndex,
        endIndex
      )
      res.status(200).json({
        message: 'Products loaded successfully from database with pagination',
        result,
      })
    } else res.status(200).json(await ProductService.findAll())
  } catch (error) {
    next(new NotFoundError('Products not found', error))
  }
}

// GET /product/:productId
export const findProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductService.findById(req.params.productId))
  } catch (error) {
    next(new NotFoundError('Product not found', error))
  }
}

//POST /products/create
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      description,
      categories,
      sizes,
      image,
      brand,
      price,
      countInStock,
      numReviews,
      rating,
    } = req.body
    const nameChecked = await ProductService.findProductByName(name)
    if(nameChecked) return res.status(409).json({message: `${name} is already created and in use`})
    const product = new Product({
      name,
      description,
      categories,
      sizes,
      image,
      brand,
      price,
      countInStock,
      numReviews,
      rating,
    })
    await ProductService.create(product)
    res.json({ message: 'Create product successfully', product })
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}
