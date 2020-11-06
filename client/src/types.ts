// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL'
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

// Use this union in reducer
export type ProductActions =
  | AddProductAction
  | RemoveProductAction
  | FetchProductAction
  | FetchProductSuccess
  | FetchProductFail

export type ProductState = {
  inCart: IProduct[]
  allProducts: IProduct[]
  error: string | null
  loading: boolean
}

export type AppState = {
  product: ProductState
}
