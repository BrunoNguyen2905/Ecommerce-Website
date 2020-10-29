import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Product, AppState } from '../types'
import { addProduct, removeProduct } from '../redux/actions'
import Products from '../components/Product'
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
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              IPAY
            </a>
          </div>
          <div>
            <Link to='/cart'>Cart</Link>
            <Link to='signIn'>Sign In</Link>
          </div>
        </header>
        <main>
          <div>
            <Products/>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </>
  )
}
