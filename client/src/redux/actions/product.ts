import axios from 'axios'
import { Dispatch } from 'redux'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  ProductActions,
  Product,
  IProduct,
} from '../../types'
const productsURL = '/api/v1/products'
export function addProduct(product: Product): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: Product): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}
export function fetchProductsAction(): ProductActions {
  return {
    type: FETCH_PRODUCTS,
  }
}
export function fetchProductsSuccess(data: IProduct[]): ProductActions {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      data,
    },
  }
}
export function fetchProductsFail(errMessage: string): ProductActions {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: {
      errMessage,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchAllProducts() {
  return async (dispatch: Dispatch) => {
    dispatch(fetchProductsAction())
    try {
      const res = await axios.get(`${productsURL}`)
      dispatch(fetchProductsSuccess(res.data))
    } catch (error) {
      dispatch(fetchProductsFail(error.message))
    }
  }
}

// export function fetchProduct(productId: string) {
//   return (dispatch: Dispatch) => {
//     return fetch(`products/${productId}`)
//       .then(resp => resp.json())
//       .then(product => {
//         dispatch(addProduct(product))
//       })
//   }
// }
