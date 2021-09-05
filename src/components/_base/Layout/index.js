import React from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className={cx(styles.wrapper)}>
      <header className={cx(styles.headerWrapper, 'container')}>
        <div className={cx(styles.header)}>
          <div>
            <Link href="/">Until</Link>
          </div>
          <div></div>
          <div>
            <Link href="/sign-in">sign in</Link>
            <Link href="/sign-up">sign up</Link>
          </div>
        </div>
      </header>
      <main className={cx(styles.main)}>{children}</main>
      <footer className={cx(styles.footerWrapper, 'container')}>
        <div className={cx(styles.footer)}>footer</div>
      </footer>
    </div>
  )
}
