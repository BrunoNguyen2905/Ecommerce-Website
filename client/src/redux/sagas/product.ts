import { select, takeLatest } from 'redux-saga/effects'

function* saveState() {
  const state = yield select()
  yield localStorage.setItem('product-state', JSON.stringify(state))
}

export default [takeLatest('*', saveState)]
