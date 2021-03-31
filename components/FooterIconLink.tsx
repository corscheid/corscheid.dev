import { Hyperlink } from '../interfaces/hyperlink'
import styles from './FooterIconLink.module.css'
import SocialIcon from './SocialIcon'

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
