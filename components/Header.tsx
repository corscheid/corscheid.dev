import Navigation from './Navigation'
import styles from './Header.module.css'

export default function Header() {
  const name = 'Corey Scheideman'
  const tagline = 'Homemade Dev'
  return (
    <header className={styles.header}>
      <img
        src='/images/profile.jpg'
        className={`${styles.headerImage} ${styles.borderCircle}`}
        alt={name}
      />
      <div className={styles.headerContainer}>
        <h1 className={styles.name}>{name}</h1>
        <small>{tagline}</small>
        <Navigation />
      </div>
    </header>
  )
}