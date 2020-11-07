import express from 'express'
import data from '../data/data'
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(data.products)
})

router.get('/:id', (req, res, next) => {
  const product = data.products.find(x => x._id === req.params.id)
  if(product) {
    res.send(product)
    console.log(product)
  } else {
    res.status(404).send({message: 'Product Not Found'})
  }
})

export default router
