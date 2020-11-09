import {
  ProductState,
  ProductActions,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  PRODUCT_DETAILS,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
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
  case ADD_PRODUCT: {
    // const {product, qty} = action.payload
    const item = action.payload
    console.log(state.inCart.length)
    const exsitProd = state.inCart.find(
      (p) => p.product._id === item.product._id
    )
    if (exsitProd) {
      console.log(state.inCart)
      return {
        ...state,
        inCart: state.inCart.map((x) =>
          x.product._id === exsitProd.product._id ? item : x
        ),
      }
    } else {
      return {
        ...state,
        inCart: [...state.inCart, item],
      }
    }
  }

  case REMOVE_PRODUCT: {
    const { productId } = action.payload
    return {
      ...state,
      inCart: state.inCart.filter((x) => x.product._id !== productId),
    }
  }
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
