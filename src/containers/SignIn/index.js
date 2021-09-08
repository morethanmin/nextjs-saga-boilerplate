import SignIn from 'components/SignIn'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as authActions from 'store/modules/user'

export default function SignInContainer() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  useEffect(() => {}, [])
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.signIn({ ...inputs }))
  }
  const onChange = (e) => {
    const { name, value } = e.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }))
  }
  return <SignIn inputs={inputs} onChange={onChange} onSubmit={onSubmit} />
}