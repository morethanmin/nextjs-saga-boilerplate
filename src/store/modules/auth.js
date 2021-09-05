import * as authAPI from 'lib/api/auth'

import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from '@redux-saga/core/effects'

const SIGN_IN = 'auth/SIGN_IN'
const SIGN_IN_SUCCESS = 'auth/SIGN_IN_SUCCESS'
const SIGN_IN_ERROR = 'auth/SIGN_IN_ERROR'

const SIGN_OUT = 'auth/SIGN_OUT'
const SIGN_OUT_SUCCESS = 'auth/SIGN_OUT_SUCCESS'
const SIGN_OUT_ERROR = 'auth/SIGN_OUT_ERROR'

export const signIn = (payload, successCallback = () => {}) => ({
  type: SIGN_IN,
  payload,
  successCallback,
})
export const signOut = (successCallback) => ({
  type: SIGN_OUT,
  successCallback,
})

const signInSaga = function* (action) {
  try {
    const payload = yield call(authAPI.signIn, action.payload)
    yield put({ type: SIGN_IN_SUCCESS, payload })
    yield call(action.successCallback)
  } catch (error) {
    yield put({ type: SIGN_IN_ERROR, payload: error })
  }
}
const signOutSaga = function* (action) {
  try {
    yield put({ type: SIGN_OUT_SUCCESS })
    yield call(action.successCallback)
  } catch (error) {
    yield put({ type: SIGN_OUT_ERROR, payload: error })
  }
}

export function* authSaga() {
  yield takeEvery(SIGN_IN, signInSaga)
  yield takeEvery(SIGN_OUT, signOutSaga)
}

const initialState = {
  token: null,
  user: null,
}

const authReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: {
          ...state.user,
          email: action.payload.email,
        },
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default authReducer
