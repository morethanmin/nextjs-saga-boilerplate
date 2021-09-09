import React from 'react'
import styles from './index.module.scss'
import cx from 'classnames'
import Link from 'next/link'

export default function Layout({ user, handleSignout, children }) {
  return (
    <div className={cx(styles.wrapper)}>
      <header className={cx(styles.headerWrapper, 'container')}>
        <div className={cx(styles.header)}>
          <div>
            <Link href="/">Until</Link>
          </div>
          <div></div>
          <div>
            {user.data ? (
              <>
                <div>{user.data.nick}</div>
                <button onClick={handleSignout}>sign out</button>
              </>
            ) : (
              <>
                <Link href="/signin">sign in</Link>
                <Link href="/signup">sign up</Link>
              </>
            )}
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
