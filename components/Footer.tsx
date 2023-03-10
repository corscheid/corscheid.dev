import {
  DEV_URL,
  DOMAIN,
  FACEBOOK_URL,
  GITHUB_URL,
  KEYBASE_URL,
  LINKEDIN_URL,
  REPO_URL,
  TWITTER_URL
} from '../lib/constants'

import styles from './Footer.module.css'
import FooterIconLink from './FooterIconLink'

export default function Footer() {
  const links = [
    { title: 'dev', href: DEV_URL },
    { title: 'keybase', href: KEYBASE_URL },
    { title: 'twitter', href: TWITTER_URL },
    { title: 'github', href: GITHUB_URL },
    { title: 'linkedin', href: LINKEDIN_URL },
    { title: 'facebook', href: FACEBOOK_URL }
  ]
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, idx) => (
          <FooterIconLink title={link.title} href={link.href} key={idx} />
        ))}
      </div>
      <div className={styles.copy}>
        <a className={styles.footerLink} href={REPO_URL}>
          {DOMAIN}
        </a>
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}
