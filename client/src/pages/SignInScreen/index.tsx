import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import MessageBox from '../../components/MessageBox'
import Spinner from '../../components/Spinner'
import { clearMessage, signIn } from '../../redux/actions'
import { AppState } from '../../types'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const userSignIn = useSelector((state: AppState) => state.user)
  const { loggedInUser, loading, message } = userSignIn
  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //TOdo: signin action
    dispatch(signIn(email, password))
  }

  useEffect(() => {
    if (loggedInUser) {
      history.push(redirect)
    }
  }, [history, redirect, loggedInUser])
  return (
    <div>
      <form className="form" onSubmit={SubmitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <Spinner />}
        {message && <MessageBox variant="danger">{message}</MessageBox>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="space">
            <button className="primary" type="submit">
              Sign In
            </button>
          </label>
        </div>
        <div>
          <label htmlFor="space">
            <div>
              New customer?{' '}
              <Link
                to={`/register?redirect=${redirect}`}
                onClick={() => dispatch(clearMessage())}
              >
                Create your account
              </Link>
            </div>
          </label>
        </div>
      </form>
    </div>
  )
}

export default SignInScreen
