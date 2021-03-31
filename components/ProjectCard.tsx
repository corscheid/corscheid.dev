import Image from 'next/image'
import { GitHubRepository } from '../interfaces/github-repository'
import { formatDate } from '../lib/date'
import styles from './ProjectCard.module.css'

interface Props {
  repository: GitHubRepository
}

export default function ProjectCard({ repository }: Props): JSX.Element {
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
          />
        </div>
        <div className={styles.description} itemProp="description">
          {description}
        </div>
      </a>
    </>
  )
}
