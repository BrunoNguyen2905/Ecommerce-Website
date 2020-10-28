import React, { InputHTMLAttributes } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Product, AppState } from '../types'
import { addProduct, removeProduct } from '../redux/actions'
import image from '../images/d1.jpg'
import '../index.css'
const names = [
  'Apple',
  'Orange',
  'Avocado',
  'Banana',
  'Cucumber',
  'Carrot',
]

export default function Home() {
  const openMenu = () => {
    (document.querySelector(".sidebar") as HTMLInputElement ).classList.add("open");
  }

  const closeMenu = () => {
    (document.querySelector(".sidebar") as HTMLInputElement).classList.remove("open")
  }
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
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">amazona</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src={image} alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src={image} alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src={image} alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src={image} alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src={image} alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src={image} alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
      <h1>Home page</h1>
      { products.length <= 0 && <div>No products in cart</div> }
      <ul>
        { products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>
              {`${p.name} - $${p.price}`}
            </Link>

            {'  '}

            <button onClick={ () => dispatch(removeProduct(p)) }>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={ handleAddProduct }
      >
        Add product
      </button>
    </>
  )
}
