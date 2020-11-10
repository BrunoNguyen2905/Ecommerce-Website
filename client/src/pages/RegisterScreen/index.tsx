import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import MessageBox from '../../components/MessageBox'
import Spinner from '../../components/Spinner'
import { clearMessage, register } from '../../redux/actions'
import { AppState } from '../../types'

const RegisterScreen = () => {
  const [Lname, setLName] = useState('')
  const [Fname, setFName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const userRegister = useSelector((state: AppState) => state.user)
  const { loggedInUser, loading, message } = userRegister
  const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword)
      alert('Password and confirm password are not match')
    //TOdo: register action
    else dispatch(register(Fname, Lname, email, password))
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
          <h1>Create Account</h1>
        </div>
        {loading && <Spinner />}
        {message && <MessageBox variant="danger">{message}</MessageBox>}
        <div>
          <label htmlFor="Fname">First Name</label>
          <input
            type="text"
            id="Fname"
            placeholder="Enter First Name"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFName(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="Lname">Last Name</label>
          <input
            type="text"
            id="Lname"
            placeholder="Enter Last Name"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLName(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
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
            placeholder="Enter Password"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter Confirm Password"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setconfirmPassword(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="space">
            <button className="primary" type="submit">
              Register
            </button>
          </label>
        </div>
        <div>
          <label htmlFor="space">
            <div>
              Already have an account?{' '}
              <Link
                to={`/signin?redirect=${redirect}`}
                onClick={() => dispatch(clearMessage())}
              >
                Sign In
              </Link>
            </div>
          </label>
        </div>
      </form>
    </div>
  )
}

export default RegisterScreen
