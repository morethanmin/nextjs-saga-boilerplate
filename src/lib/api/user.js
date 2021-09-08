import axios from 'axios'

// 중복된 주소를 줄이는 방법
axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true // front, back 간 쿠키 공유

//회원가입
export const signUp = async (data) => {
  return await axios.post('/signup', data)
}

//로그인
export const signIn = async (data) => {
  return await axios.post('/signin', data)
}

//로그아웃
export const signOut = async (data) => {
  return await axios.post('/signup', data)
}

//로그인 상태 불러오기
export const loadUser = async (data) => {
  return axios.get('/user', data)
}
