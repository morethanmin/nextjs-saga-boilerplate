import React from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Link from 'next/link'

export default function SignIn({ onSubmit }) {
  return (
    <div>
      <div>signin</div>
      <form onSubmit={onSubmit}>
        <input type="email" />
        <input type="password" />
        <button type="submit">login</button>
      </form>
    </div>
  )
}
