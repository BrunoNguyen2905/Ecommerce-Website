import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Product, AppState } from '../types'
import { addProduct, removeProduct } from '../redux/actions'
import Products from '../components/Products'
import Wrapper from '../components/Wrapper'
import '../index.css'

import data from '../data/data'
const names = ['Apple', 'Orange', 'Avocado', 'Banana', 'Cucumber', 'Carrot']

export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.inCart)

  const handleAddProduct = () => {
    const product: Product = {
      id: (+new Date()).toString(),
      name: names[Math.floor(Math.random() * names.length)],
      price: +(Math.random() * 10).toFixed(2),
    }
    dispatch(addProduct(product))
  }

  return (
    <>
      <Wrapper>
        <main>
          <div>
            <div className="row center">
              {data.products.map((prod) => (
                <Products
                  key={prod._id}
                  _id={prod._id}
                  name={prod.name}
                  brand={prod.brand}
                  categories={prod.categories}
                  sizes={prod.sizes}
                  description={prod.description}
                  image={prod.image}
                  numReviews={prod.numReviews}
                  price={prod.price}
                  rating={prod.rating}
                />
              ))}
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}
