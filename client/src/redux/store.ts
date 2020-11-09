import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

const initState: AppState = {
  product: {
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
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }
  const savedStore = localStorage.getItem('product-state') || ''
  if (savedStore) initialState = JSON.parse(savedStore)
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
