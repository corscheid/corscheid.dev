import { Hyperlink } from '../interfaces/hyperlink'
import {
  DEV_URL,
  DOMAIN,
  FACEBOOK_URL,
  GITHUB_URL,
  KEYBASE_URL,
  LINKEDIN_URL,
  TWITTER_URL
} from '../lib/constants'
import styles from './Footer.module.css'
import FooterIconLink from './FooterIconLink'

export default function Footer() {
  const links: Hyperlink[] = [
    { title: "dev", href: DEV_URL },
    { title: "keybase", href: KEYBASE_URL },
    { title: "twitter", href: TWITTER_URL },
    { title: "github", href: GITHUB_URL },
    { title: "linkedin", href: LINKEDIN_URL },
    { title: "facebook", href: FACEBOOK_URL }
  ]
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            {links.map(link => <FooterIconLink title={link.title} href={link.href} key={link.title} />)}
          </div>
          <div>
            <a className={styles.footerLink} href={GITHUB_URL}>
              {DOMAIN}
            </a>
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}
