import * as userAPI from 'lib/api/user'

import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from '@redux-saga/core/effects'

const SIGN_IN = 'user/SIGN_IN'
const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS'
const SIGN_IN_ERROR = 'user/SIGN_IN_ERROR'

const SIGN_UP = 'user/SIGN_UP'
const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS'
const SIGN_UP_ERROR = 'user/SIGN_UP_ERROR'

const SIGN_OUT = 'user/SIGN_OUT'
const SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS'
const SIGN_OUT_ERROR = 'user/SIGN_OUT_ERROR'

export const signIn = (payload, successCallback = () => {}) => ({
  type: SIGN_IN,
  payload,
  successCallback,
})
export const signUp = (payload, successCallback = () => {}) => ({
  type: SIGN_UP,
  payload,
  successCallback,
})
export const signOut = (successCallback) => ({
  type: SIGN_OUT,
  successCallback,
})

const signInSaga = function* (action) {
  try {
    const payload = yield call(userAPI.signIn, action.payload)
    yield put({ type: SIGN_IN_SUCCESS, payload })
    yield call(action.successCallback)
  } catch (error) {
    yield put({ type: SIGN_IN_ERROR, payload: error })
  }
}
const signUpSaga = function* (action) {
  try {
    const payload = yield call(userAPI.signUp, action.payload)
    yield put({ type: SIGN_UP_SUCCESS, payload })
    yield call(action.successCallback)
  } catch (error) {
    yield put({ type: SIGN_UP_ERROR, payload: error })
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

export function* userSaga() {
  yield takeEvery(SIGN_IN, signInSaga)
  yield takeEvery(SIGN_UP, signUpSaga)
  yield takeEvery(SIGN_OUT, signOutSaga)
}

const initialState = {
  loading: null,
  user: null,
  error: null,
}

const userReducer = (state = initialState, action) => {
  // console.log(action)
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
    case SIGN_UP_SUCCESS:
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

export default userReducer
