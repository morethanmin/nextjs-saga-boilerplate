import Layout from 'components/_base/Layout'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loadUser, signOut } from 'store/modules/user'

function LayoutContainer({ children }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const handleSignout = () => {
    dispatch(signOut())
  }
  return (
    <Layout user={user} handleSignout={handleSignout}>
      {children}
    </Layout>
  )
}

export default LayoutContainer
