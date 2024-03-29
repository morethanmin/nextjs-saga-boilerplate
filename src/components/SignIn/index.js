import React from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Link from 'next/link'

export default function SignIn({ inputs, onChange, onSubmit }) {
  return (
    <div>
      <div>signin</div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={inputs.email}
          onChange={onChange}
          type="email"
        />
        <input
          name="password"
          value={inputs.password}
          onChange={onChange}
          type="password"
        />
        <button type="submit">login</button>
      </form>
    </div>
  )
}
