import { Provider } from 'react-redux'
import store from 'store/index'

import LayoutContainer from 'containers/Layout'
import 'styles/globals.scss'

function Until({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LayoutContainer>
        <Component {...pageProps} />
      </LayoutContainer>
    </Provider>
  )
}

export default Until
