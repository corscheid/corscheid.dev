import SocialIcon from './SocialIcon'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            <a
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://dev.to/corscheid"
              title="dev"
            >
              <SocialIcon name="dev" />
            </a>
            <a
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://keybase.io/corscheid"
              title="Keybase"
            >
              <SocialIcon name="keybase" />
            </a>

            <a
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/corscheid"
              title="twitter"
            >
              <SocialIcon name="twitter" />
            </a>

            <a
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/corscheid"
              title="github"
            >
              <SocialIcon name="github" />
            </a>

            <a
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/corscheid"
              title="linkedin"
            >
              <SocialIcon name="linkedin" />
            </a>

            <a
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/corscheid"
              title="facebook"
            >
              <SocialIcon name="facebook" />
            </a>
          </div>
          <div>
            <a className={styles.footerLink} href="https://github.com/corscheid/corscheid.dev">
              corscheid.dev
            </a>
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}
