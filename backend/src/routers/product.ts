import express from 'express'
import {
  findAllWithPagination,
  findProductById,
  createProduct
} from '../controllers/product'
const router = express.Router()

router.get('/', findAllWithPagination)
router.get('/:productId', findProductById)
router.post('/create', createProduct)

export default router
