import {
  ProductState,
  ProductActions,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  PRODUCT_DETAILS,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../../types'

export default function product(
  state: ProductState = {
    inCart: [],
    allProducts: [],
    error: null,
    loading: true,
    oneProduct: {
      _id: '',
      name: '',
      brand: '',
      description: '',
      categories: [],
      countInStock: 0,
      image: '',
      numReviews: 0,
      price: 0,
      rating: 0,
      sizes: [],
    },
  },
  action: ProductActions
): ProductState {
  switch (action.type) {
  // case ADD_PRODUCT: {
  //   const { product } = action.payload
  //   if (state.inCart.find(p => p.id === product.id)) {
  //     return state
  //   }
  //   // Always return new state (e.g, new object) if changed
  //   return { ...state, inCart: [...state.inCart, product] }
  // }

  // case REMOVE_PRODUCT: {
  //   const { product } = action.payload
  //   const index = state.inCart.findIndex(p => p.id === product.id)
  //   if (index >= 0) {
  //     state.inCart.splice(index, 1)
  //     return { ...state, inCart: [...state.inCart] }
  //   }
  //   return state
  // }
  case FETCH_PRODUCTS: {
    return { ...state, loading: true }
  }

  case FETCH_PRODUCTS_SUCCESS: {
    const { data } = action.payload
    return { ...state, loading: false, error: null, allProducts: data }
  }

  case FETCH_PRODUCTS_FAIL: {
    const { errMessage } = action.payload
    return { ...state, loading: false, error: errMessage }
  }

  case PRODUCT_DETAILS: {
    return {
      ...state,
      loading: true,
      oneProduct: {
        _id: '',
        brand: '',
        categories: [],
        countInStock: 0,
        description: '',
        image: '',
        name: '',
        numReviews: 0,
        price: 0,
        rating: 0,
        sizes: [],
      },
    }
  }

  case PRODUCT_DETAILS_SUCCESS: {
    const { data } = action.payload
    return { ...state, loading: false, error: null, oneProduct: data! }
  }

  case PRODUCT_DETAILS_FAIL: {
    const { errMessage } = action.payload
    return { ...state, loading: false, error: errMessage }
  }
  default:
    return state
  }
}
