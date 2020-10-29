import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'
import data from '../data/data'
import image from '../images/d1.jpg'
import '../index.css'
export default function Product() {
  const { id } = useParams()

  // const product = useSelector((state: AppState) =>
  //   state.product.inCart.find(p => p.id === id))

  // if (!product) {
  //   return <div>Product not found</div>
  // }

  const product = data.products.find((product) => product._id === id)
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <>
      <Link to="/">Back to result</Link>
      <div className="details">
        <div className="details-image">
          <img src={image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              <b>{product.price}</b>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
