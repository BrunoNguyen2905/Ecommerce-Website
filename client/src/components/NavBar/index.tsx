import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../../redux/actions'
import { AppState } from '../../types'

const NavBar = () => {
  const cart = useSelector((state: AppState) => state.product.inCart)
  const userInfo = useSelector((state: AppState) => state.user.loggedInUser)
  const dispatch = useDispatch()
  const signOutHandler = () => {
    dispatch(signOut())
  }
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
        {userInfo ? (
          <div className="dropdown">
            <Link to="#">
              {`${userInfo.firstName} ${userInfo.lastName}`}{' '}
              <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <Link to="#signout" onClick={signOutHandler}>
                Sign Out
              </Link>
            </ul>
          </div>
        ) : (
          <Link to="signIn">Sign In</Link>
        )}
      </div>
    </header>
  )
}

export default NavBar
