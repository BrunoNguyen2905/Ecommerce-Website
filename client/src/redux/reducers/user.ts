import {
  UserState,
  UserActions,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNOUT,
  CLEAR_MESSAGE,
} from '../../types'
export default function user(
  state: UserState = {
    loggedInUser: {
      _id: '',
      email: '',
      firstName: '',
      isAdmin: false,
      lastName: '',
      token: '',
    },
    message: '',
    loading: true,
  },
  action: UserActions
): UserState {
  switch (action.type) {
  case USER_SIGNIN_REQUEST:
    return { ...state, loading: true }
  case USER_SIGNIN_SUCCESS: {
    const { data, successMes } = action.payload
    return {
      ...state,
      loading: false,
      loggedInUser: data,
      message: successMes,
    }
  }
  case USER_SIGNIN_FAIL: {
    const { errMessage } = action.payload
    return {
      ...state,
      loading: false,
      message: errMessage,
      loggedInUser: null,
    }
  }
  case USER_REGISTER_REQUEST:
    return { ...state, loading: true }
  case USER_REGISTER_SUCCESS: {
    const { data, successMes } = action.payload
    return {
      ...state,
      loading: false,
      loggedInUser: data,
      message: successMes,
    }
  }
  case USER_REGISTER_FAIL: {
    const { errMessage } = action.payload
    return {
      ...state,
      loading: false,
      message: errMessage,
      loggedInUser: null,
    }
  }
  case CLEAR_MESSAGE: {
    return { ...state, message: '' }
  }
  case USER_SIGNOUT:
    return { message: '', loggedInUser: null, loading: false }

  default:
    return state
  }
}
