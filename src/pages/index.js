import axios from 'axios'
import HomeContainer from 'containers/Home'
import LayoutContainer from 'containers/Layout'
import { useDispatch } from 'react-redux'
import wrapper from 'store'

function Home(props) {
  return (
    <LayoutContainer>
      <HomeContainer />
    </LayoutContainer>
  )
}

// SSR은 프론트서버에서 진행되기 때문에 브라우저에서는 개입할 수 없다.
// SSR은 프론트서버에서 백엔드서버로 데이터를 요청하고, 받은 후 브라우저로 데이터와 렌더링을 한번에 보낸다.
// 서버에서 진행이 되기 떄문에 쿠키를 넣어서 직접 보내줘야한다.
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      // back 서버로 쿠키 전달
      // 로그인을 하게되면 context에서 req를 사용 가능
      // 프론트서버에서 쿠키가 공유되는걸 방지하기 위해 if문으로 조건 작업 진행
      // console.log('context', context)
      const cookie = req ? req.headers.cookie : ''
      axios.defaults.headers.Cookie = ''
      if (req && cookie) {
        axios.defaults.headers.Cookie = cookie
      }
      // await dispatch(loadUser())
    }
)

export default Home
