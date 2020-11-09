import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import MessageBox from '../../components/MessageBox'
import { addToCart, removeProduct } from '../../redux/actions'
import { AppState } from '../../types'

const Cart = () => {
  const { id } = useParams()
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const cart = useSelector((state: AppState) => state.product.inCart)

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const removeFromCartHandler = (id: string) => {
    //delelte action
    dispatch(removeProduct(id))
  }

  const checkoutHandler = () => {
    history.push('/signin?redirect=shipping')
  }
  return (
    <main>
      <div className="row top">
        <div className="col-2">
          <h1>Shopping Cart</h1>
          {cart.length === 0 ? (
            <MessageBox variant="info">
              Cart is empty.<Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.product._id}>
                  <div className="row">
                    <div>
                      <img
                        className="small"
                        src={item.product.image}
                        alt={item.product.name}
                      />
                    </div>
                    <div className="min-30">
                      <Link to={`/products/${item.product._id}`}>
                        {item.product.name}
                      </Link>
                    </div>
                    <div>
                      <select
                        onBlur={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          console.log(e.target.value)
                        }
                        value={String(item.qty)}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          dispatch(
                            addToCart(item.product._id, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.product.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div>${item.product.price}</div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>
                  Subtotal ({cart.reduce((a, c) => a + Number(c.qty), 0)}
                  {'  '}
                  items): $
                  {cart.reduce(
                    (a, c) => a + c.product.price * Number(c.qty),
                    0
                  )}
                </h2>
              </li>
              <li>
                <button
                  type="button"
                  onClick={checkoutHandler}
                  className="primary block"
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart
