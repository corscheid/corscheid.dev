import Image from 'next/image'
import { NAME, TAGLINE } from '../lib/constants'
import styles from './Header.module.css'
import Navigation from './Navigation'

export default function Header() {
  const name = NAME
  const tagline = TAGLINE
  return (
    <header className={styles.header}>
      {/*
        preserve aspect ratio while still using next/image
        code adapted from GitHub issue comment by @7ruth
        https://github.com/vercel/next.js/issues/18497#issuecomment-762397599
      */}
      <div className={styles.imageWrapperOuter}>
        <div className={styles.imageWrapper}>
          <Image
            className={`${styles.headerImage} ${styles.borderCircle}`}
            src={'/images/profile.jpg'}
            alt={name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.headerContainer}>
        <h1 className={styles.name}>{name}</h1>
        <small>{tagline}</small>
        <Navigation />
      </div>
    </header>
  )
}
