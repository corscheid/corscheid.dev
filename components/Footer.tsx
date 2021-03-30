import SocialIcon from './SocialIcon'
import styles from './Footer.module.css'

function FooterIconLink({ href, title }) {
  return (
    <a
      className={styles.footerLink}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      title={title}
    >
      <SocialIcon name={title} />
    </a>
  )
}

export default function Footer() {
  const links = [
    {title: "dev", href: "https://dev.to/corscheid"},
    {title: "keybase", href: "https://keybase.io/corscheid"},
    {title: "twitter", href: "https://twitter.com/corscheid"},
    {title: "github", href: "https://github.com/corscheid"},
    {title: "linkedin", href: "https://linkedin.com/in/corscheid"},
    {title: "facebook", href: "https://facebook.com/corscheid"}
  ]
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            {links.map(link => FooterIconLink(link))}
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
