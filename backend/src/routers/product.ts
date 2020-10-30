import express from 'express'
import data from '../data/data'
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(data.products)
})
export default router
