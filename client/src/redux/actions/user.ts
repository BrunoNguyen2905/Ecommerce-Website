import axios from 'axios'
import { Dispatch } from 'redux'

import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNOUT,
  UserActions,
  IUser,
  CLEAR_MESSAGE,
} from '../../types'
const userURL = '/api/v1/users'

export function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  }
}

export function registerRequest(
  firstName: string,
  lastName: string,
  email: string,
  password: string
): UserActions {
  return {
    type: USER_REGISTER_REQUEST,
    payload: {
      firstName,
      lastName,
      email,
      password,
    },
  }
}

export function registerSuccess(data: IUser, successMes: string): UserActions {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: {
      data,
      successMes,
    },
  }
}

export function registerFail(errMessage: string): UserActions {
  return {
    type: USER_REGISTER_FAIL,
    payload: {
      errMessage,
    },
  }
}

export function signInRequest(email: string, password: string): UserActions {
  return {
    type: USER_SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export function signInFail(errMessage: string): UserActions {
  return {
    type: USER_SIGNIN_FAIL,
    payload: {
      errMessage,
    },
  }
}

export function signInSuccess(data: IUser, successMes: string): UserActions {
  return {
    type: USER_SIGNIN_SUCCESS,
    payload: {
      data,
      successMes,
    },
  }
}

export function signOutAction(): UserActions {
  return {
    type: USER_SIGNOUT,
  }
}

export function signIn(email: string, password: string) {
  return async (dispatch: Dispatch) => {
    dispatch(clearMessage())
    dispatch(signInRequest(email, password))
    try {
      const { data } = await axios.post(`${userURL}/signin`, {
        email,
        password,
      })
      console.log(data)
      console.log(data.message)
      console.log(data.user)
      dispatch(signInSuccess(data.user, data.message))
    } catch (error) {
      dispatch(
        signInFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      )
    }
  }
}

export function register(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  return async (dispatch: Dispatch) => {
    dispatch(clearMessage())
    dispatch(registerRequest(firstName, lastName, email, password))
    try {
      const { data } = await axios.post(`${userURL}/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      console.log(data)
      console.log(data.message)
      console.log(data.user)
      dispatch(registerSuccess(data.user, data.message))
    } catch (error) {
      dispatch(
        registerFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      )
    }
  }
}
export function signOut() {
  return async (dispatch: Dispatch) => {
    dispatch(signOutAction())
  }
}
