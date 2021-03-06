import Image from 'next/image'
import { ProjectCardProps } from '../interfaces'
import { formatDate } from '../lib/date'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  repository,
  priority
}: ProjectCardProps): JSX.Element {
  const { html_url, name, description, created_at, image_url } = repository
  return (
    <>
      <a href={html_url} className={styles.projectCard}>
        <div className={styles.cardHeader}>
          <h2 className={styles.projName}>{name}</h2>
          <time
            className={styles.projDate}
            dateTime={created_at}
            itemProp="created_at"
          >
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
        <div className={styles.description} itemProp="description">
          {description}
        </div>
      </a>
    </>
  )
}
