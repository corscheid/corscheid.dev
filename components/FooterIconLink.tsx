import styles from './FooterIconLink.module.css'
import SocialIcon from './SocialIcon'

export default function FooterIconLink({
  href,
  title
}: {
  title: string
  href: string
}) {
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
