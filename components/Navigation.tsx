import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navigation.module.css'

interface NavItem {
  name: string
  dest: string
}

const links: NavItem[] = [
  { name: 'Home', dest: '/' },
  { name: 'Blog', dest: '/blog' },
  { name: 'Projects', dest: '/projects' },
  { name: 'Contact', dest: '/contact' }
]

export default function Navigation() {
  const { pathname } = useRouter()
  return (
    <nav>
      {links.map(({ name, dest }) => (
        <div className={styles.navItem} key={name}>
          <Link href={dest}>
            <a
              className={
                pathname === dest ||
                (name === 'Blog' && pathname.includes(dest))
                  ? `${styles.active} ${styles.navLink}`
                  : styles.navLink
              }
            >
              {name}
            </a>
          </Link>
          {name !== 'Contact' ? ' / ' : null}
        </div>
      ))}
    </nav>
  )
}
