'use client'

import { BLOG, CONTACT, HOME, PROJECTS } from '../lib/constants'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { type NavItem } from '../interfaces'
import styles from './Navigation.module.css'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navigation(): JSX.Element {
  const { pathname } = useRouter()
  const links: NavItem[] = [
    { name: HOME, dest: '/' },
    { name: BLOG, dest: '/blog' },
    { name: PROJECTS, dest: '/projects' },
    { name: CONTACT, dest: '/contact' }
  ]
  return (
    <nav className={styles.nav}>
      {links.map(({ name, dest }) => (
        <div className={styles.navItem} key={name}>
          <Link href={dest} legacyBehavior>
            <a
              className={
                pathname === dest || (name === BLOG && pathname.includes(dest))
                  ? `${styles.active} ${styles.navLink}`
                  : styles.navLink
              }
            >
              {name}
            </a>
          </Link>
          <span className={styles.divider}>|</span>
        </div>
      ))}
      <ThemeSwitcher />
    </nav>
  )
}
