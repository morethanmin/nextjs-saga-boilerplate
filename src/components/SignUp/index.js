import React from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Link from 'next/link'

export default function SignUp({ inputs, onChange, onSubmit }) {
  return (
    <div>
      <div>signup</div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={inputs.email}
          onChange={onChange}
          type="email"
        />
        <input
          name="nickname"
          value={inputs.nickname}
          onChange={onChange}
          type="text"
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
