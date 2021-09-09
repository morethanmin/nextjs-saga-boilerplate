import 'styles/globals.scss'
import wrapper from 'store'

function Until({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(Until)
