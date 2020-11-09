import axios from 'axios'
import { Dispatch } from 'redux'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  ProductActions,
  IProduct,
  PRODUCT_DETAILS,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../../types'
const productsURL = '/api/v1/products'
export function addProduct(product: IProduct, qty: Number): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
      qty,
    },
  }
}

export function removeProduct(productId: string): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      productId,
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

export function productDetailsAction(): ProductActions {
  return {
    type: PRODUCT_DETAILS,
  }
}

export function productDetailsSuccess(data: IProduct): ProductActions {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: {
      data,
    },
  }
}
export function productDetailsFail(errMessage: string): ProductActions {
  return {
    type: PRODUCT_DETAILS_FAIL,
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

export function fetchOneProduct(productId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(productDetailsAction())
    try {
      const res = await axios.get(`${productsURL}/${productId}`)
      dispatch(productDetailsSuccess(res.data))
    } catch (error) {
      dispatch(
        productDetailsFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      )
    }
  }
}

export function addToCart(productId: string, qty: number) {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(`${productsURL}/${productId}`)
    dispatch(addProduct(res.data, qty))
  }
}

// export function removeFromCart(productId: string){
//   return async(dispatch: Dispatch) => {
//     const
//   }
// }
// export function fetchProduct(productId: string) {
//   return (dispatch: Dispatch) => {
//     return fetch(`products/${productId}`)
//       .then(resp => resp.json())
//       .then(product => {
//         dispatch(addProduct(product))
//       })
//   }
// }
