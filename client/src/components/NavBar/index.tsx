import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="row">
          <div>
            <Link className="brand" to="/">
              IPAY
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            <Link to="signIn">Sign In</Link>
          </div>
        </header>
    )
}

export default NavBar
