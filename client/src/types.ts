// Action types
//products
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL'
export const PRODUCT_DETAILS = 'PRODUCT_DETAILS'
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'
//users
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'
export const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST'
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS'
export const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL'
export const USER_SIGNOUT = 'USER_SIGNOUT'

export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
// Product Inteface
export type IProduct = {
  _id: string
  name: string
  description: string
  categories: string[]
  sizes: string[]
  brand: string
  image: string
  price: number
  rating: number
  numReviews: number
  countInStock: number
}
//User Interface
export type IUser = {
  _id: string
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean | undefined
  token: string
}

export type inCartProps = {
  product: IProduct
  qty: Number
}

export type ratingProps = {
  rating: number
  numReviews: number
}

export type WrapperProps = {
  children: React.ReactNode
}

export type MessageProps = {
  children: React.ReactNode
  variant: string
}
// A product
export type Product = {
  id: string
  name: string
  price: number
}

//products
export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: IProduct
    qty: Number
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    productId: string
  }
}
export type FetchProductAction = {
  type: typeof FETCH_PRODUCTS
}
export type FetchProductSuccess = {
  type: typeof FETCH_PRODUCTS_SUCCESS
  payload: {
    data: IProduct[]
  }
}
export type FetchProductFail = {
  type: typeof FETCH_PRODUCTS_FAIL
  payload: {
    errMessage: string
  }
}
export type ProductDetailsAction = {
  type: typeof PRODUCT_DETAILS
}

export type ProductDetailsSuccess = {
  type: typeof PRODUCT_DETAILS_SUCCESS
  payload: {
    data: IProduct
  }
}

export type ProductDetailsFail = {
  type: typeof PRODUCT_DETAILS_FAIL
  payload: {
    errMessage: string
  }
}

//users

export type registerRequest = {
  type: typeof USER_REGISTER_REQUEST
  payload: {
    firstName: string
    lastName: string
    email: string
    password: string
  }
}

export type registerSuccess = {
  type: typeof USER_REGISTER_SUCCESS
  payload: {
    data: IUser
    successMes: string
  }
}

export type registerFail = {
  type: typeof USER_REGISTER_FAIL
  payload: {
    errMessage: string
  }
}

export type signInRequest = {
  type: typeof USER_SIGNIN_REQUEST
  payload: {
    email: string
    password: string
  }
}

export type signInFail = {
  type: typeof USER_SIGNIN_FAIL
  payload: {
    errMessage: string
  }
}

export type signInSuccess = {
  type: typeof USER_SIGNIN_SUCCESS
  payload: {
    data: IUser
    successMes: string
  }
}

export type signOut = {
  type: typeof USER_SIGNOUT
}

export type clearMessage = {
  type: typeof CLEAR_MESSAGE
}
// Use this union in reducer
export type ProductActions =
  | AddProductAction
  | RemoveProductAction
  | FetchProductAction
  | FetchProductSuccess
  | FetchProductFail
  | ProductDetailsAction
  | ProductDetailsSuccess
  | ProductDetailsFail

export type UserActions =
  | signInRequest
  | signInFail
  | signInSuccess
  | registerRequest
  | registerSuccess
  | registerFail
  | clearMessage
  | signOut

export type ProductState = {
  // inCart: {product: IProduct & {qty: number}}[]
  // inCart: IProduct[]
  inCart: inCartProps[]
  allProducts: IProduct[]
  error: string | null
  loading: boolean
  oneProduct: IProduct
}

export type UserState = {
  loggedInUser: IUser | null
  message: string
  loading: boolean
}

export type AppState = {
  product: ProductState
  user: UserState
}
