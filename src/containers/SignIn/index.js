import SignIn from 'components/SignIn'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as authActions from 'store/modules/auth'

export default function SignInContainer() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {}, [])
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.signIn())
  }
  return <SignIn onSubmit={onSubmit} />
}
