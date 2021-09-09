import * as userAPI from 'lib/api/user'

import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from '@redux-saga/core/effects'

const LOAD_USER = 'user/LOAD_USER'
const LOAD_USER_SUCCESS = 'user/LOAD_USER_SUCCESS'
const LOAD_USER_ERROR = 'user/LOAD_USER_ERROR'

const SIGN_IN = 'user/SIGN_IN'
const SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS'
const SIGN_IN_ERROR = 'user/SIGN_IN_ERROR'

const SIGN_UP = 'user/SIGN_UP'
const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS'
const SIGN_UP_ERROR = 'user/SIGN_UP_ERROR'

const SIGN_OUT = 'user/SIGN_OUT'
const SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS'
const SIGN_OUT_ERROR = 'user/SIGN_OUT_ERROR'

export const loadUser = (payload, successCallback = () => {}) => ({
  type: LOAD_USER,
  payload,
  successCallback,
})
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
export const signOut = (successCallback = () => {}) => ({
  type: SIGN_OUT,
  successCallback,
})

const loadUserSaga = function* (action) {
  try {
    const payload = yield call(userAPI.loadUser, action.payload)
    yield put({ type: LOAD_USER_SUCCESS, payload: payload.data })
    yield call(action.successCallback)
  } catch (error) {
    console.log('message', error.message)
    yield put({ type: LOAD_USER_ERROR, payload: error.message })
  }
}

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
    yield put({ type: SIGN_UP_SUCCESS, payload: payload.data })
    yield call(action.successCallback)
  } catch (error) {
    yield put({ type: SIGN_UP_ERROR, payload: error })
  }
}

const signOutSaga = function* (action) {
  try {
    const payload = yield call(userAPI.signOut, action.payload)
    yield put({ type: SIGN_OUT_SUCCESS, payload })
    yield call(action.successCallback)
  } catch (error) {
    yield put({ type: SIGN_OUT_ERROR, payload: error })
  }
}

export function* userSaga() {
  yield takeEvery(LOAD_USER, loadUserSaga)
  yield takeEvery(SIGN_IN, signInSaga)
  yield takeEvery(SIGN_UP, signUpSaga)
  yield takeEvery(SIGN_OUT, signOutSaga)
}

const initialState = {
  loading: null,
  data: null,
  error: null,
}

const userReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case LOAD_USER:
    case SIGN_IN:
    case SIGN_UP:
    case SIGN_OUT:
      return {
        ...state,
        loading: true,
      }
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      }
    case LOAD_USER_ERROR:
      console.log(action.payload)
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
        },
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
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
