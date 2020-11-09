import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../../types'

const NavBar = () => {
  const cart = useSelector((state: AppState) => state.product.inCart)
  return (
    <header className="row">
      <div>
        <Link className="brand" to="/">
          IPAY
        </Link>
      </div>
      <div>
        <Link to="/cart">
          Cart
          {cart.length > 0 && <span className="badge">{cart.length}</span>}
        </Link>
        <Link to="signIn">Sign In</Link>
      </div>
    </header>
  )
}

export default NavBar
