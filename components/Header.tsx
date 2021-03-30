import Image from 'next/image'
import Navigation from './Navigation'
import styles from './Header.module.css'

export default function Header() {
  const name = 'Corey Scheideman'
  const tagline = 'Homebrewed Dev'
  return (
    <header className={styles.header}>

      {/*
        preserve aspect ratio while still using next/image
        code adapted from GitHub issue comment by @7ruth
        https://github.com/vercel/next.js/issues/18497#issuecomment-762397599
      */}
      <div style={{height: '96px', width: '96px'}}>
        <div style={{
          marginTop: '1.1rem',
          position: 'relative',
          maxWidth: '100%',
          height: '100%'
        }}>
          <Image
            className={`${styles.headerImage} ${styles.borderCircle}`}
            src={"/images/profile.jpg"}
            alt={name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/*<img
        src="/images/profile.jpg"
        width={96}
        height={96}
        className={`${styles.headerImage} ${styles.borderCircle}`}
        alt={name}
      />*/}
      <div className={styles.headerContainer}>
        <h1 className={styles.name}>{name}</h1>
        <small>{tagline}</small>
        <Navigation />
      </div>
    </header>
  )
}
