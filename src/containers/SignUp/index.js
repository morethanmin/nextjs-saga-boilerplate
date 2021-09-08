import SignUp from 'components/SignUp'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as authActions from 'store/modules/user'

export default function SignUpContainer() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [inputs, setInputs] = useState({
    email: '',
    nickname: '',
    password: '',
  })
  useEffect(() => {}, [])
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.signUp({ ...inputs }))
  }
  const onChange = (e) => {
    const { name, value } = e.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }))
  }
  return <SignUp inputs={inputs} onChange={onChange} onSubmit={onSubmit} />
}
