import LayoutContainer from 'containers/Layout'
import SignUpContainer from 'containers/SignUp'
import { END } from '@redux-saga/core'
import axios from 'axios'
import wrapper from 'store'
import { loadUser } from 'store/modules/user'

function SignUp() {
  return (
    <LayoutContainer>
      <SignUpContainer />
    </LayoutContainer>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req ? req.headers.cookie : ''
      axios.defaults.headers.Cookie = ''
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie
      }
      store.dispatch(loadUser())
      store.dispatch(END)
      await store.sagaTask.toPromise()

      const user = store.getState().user
      if (user.data) {
        res.setHeader('location', '/')
        res.statusCode = 302
        res.end()
      }
    }
)

export default SignUp
