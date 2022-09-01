import {
  DEV_URL,
  DOMAIN,
  FACEBOOK_URL,
  GITHUB_URL,
  KEYBASE_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  REPO_URL
} from '../lib/constants'

import FooterIconLink from './FooterIconLink'
import { Hyperlink } from '../interfaces'
import styles from './Footer.module.css'

export default function Footer() {
  const links: Hyperlink[] = [
    { title: 'dev', href: DEV_URL },
    { title: 'keybase', href: KEYBASE_URL },
    { title: 'twitter', href: TWITTER_URL },
    { title: 'github', href: GITHUB_URL },
    { title: 'linkedin', href: LINKEDIN_URL },
    { title: 'facebook', href: FACEBOOK_URL }
  ]
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            {links.map((link, idx) => (
              <FooterIconLink title={link.title} href={link.href} key={idx} />
            ))}
          </div>
          <div>
            <a className={styles.footerLink} href={REPO_URL}>
              {DOMAIN}
            </a>
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}
