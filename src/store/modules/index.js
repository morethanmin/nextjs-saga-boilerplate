import { all } from '@redux-saga/core/effects'
import { combineReducers } from 'redux'
import auth, { authSaga } from './auth'

export function* rootSaga() {
  yield all([authSaga()])
}

export default combineReducers({ auth })
