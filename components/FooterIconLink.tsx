import { Hyperlink } from '../interfaces'
import SocialIcon from './SocialIcon'
import styles from './FooterIconLink.module.css'

export default function FooterIconLink({ href, title }: Hyperlink) {
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
