import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types'
import Rating from '../Rating'
const Product = ({
  _id,
  name,
  brand,
  categories,
  description,
  image,
  numReviews,
  price,
  rating,
  sizes,
}: IProduct) => {
  return (
    <div className="card">
      <Link to={`/products/${_id}`}>
        <img className="medium" src={image} alt="product" />
      </Link>
      <div className="card-body">
        <Link to={`/products/${_id}`}>
          <h2>{name}</h2>
        </Link>
        <Rating numReviews={numReviews} rating={rating} />
        <div className="price">${price}</div>
      </div>
    </div>
  )
}

export default Product
