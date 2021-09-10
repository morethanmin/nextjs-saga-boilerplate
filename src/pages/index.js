import { END } from '@redux-saga/core'
import axios from 'axios'
import HomeContainer from 'containers/Home'
import LayoutContainer from 'containers/Layout'
import wrapper from 'store'
import { loadUser } from 'store/modules/user'

function Home() {
  return (
    <LayoutContainer>
      <HomeContainer />
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
    }
)

export default Home
