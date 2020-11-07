// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL'
export const PRODUCT_DETAILS = 'PRODUCT_DETAILS'
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'
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

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
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

export type ProductState = {
  inCart: IProduct[]
  allProducts: IProduct[]
  error: string | null
  loading: boolean
  oneProduct: IProduct
}

export type AppState = {
  product: ProductState
}
