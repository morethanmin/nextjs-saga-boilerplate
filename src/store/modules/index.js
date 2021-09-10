import { all } from '@redux-saga/core/effects'
import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import user, { userSaga } from './user'

export function* rootSaga() {
  yield all([userSaga()])
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload
    default: {
      const combineReducer = combineReducers({ user })
      return combineReducer(state, action)
    }
  }
}

export default rootReducer
