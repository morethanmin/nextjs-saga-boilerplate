import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { rootSaga } from './modules'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, enhancer)
  sagaMiddleware.run(rootSaga)

  return store
}

const wrapper = createWrapper(makeStore, {
  debug: false,
})

export default wrapper
