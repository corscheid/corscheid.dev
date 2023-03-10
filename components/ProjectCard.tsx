import Image from 'next/legacy/image'
import { type GitHubRepository } from '@/lib/github'
import { formatDate } from '../lib/date'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  repository,
  priority
}: {
  repository: GitHubRepository
  priority: boolean
}) {
  const { html_url, name, description, created_at, image_url } = repository
  return (
    <>
      <a href={html_url} className={styles.projectCard}>
        <div className={styles.cardHeader}>
          <h2 className={styles.projName}>{name}</h2>
          <time className={styles.projDate} dateTime={created_at}>
            {formatDate(created_at)}
          </time>
        </div>
        <div className={styles.cardImgWrapper}>
          <Image
            className={styles.cardImage}
            src={image_url}
            alt={name}
            layout="fill"
            objectFit="contain"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
        <div className={styles.description}>{description}</div>
      </a>
    </>
  )
}
