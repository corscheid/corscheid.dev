import Image from 'next/image'
import { GitHubRepository } from '../lib/github'
import { formatDate } from '../lib/date'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  repository
}: {
  repository: GitHubRepository
}) {
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
        {/*
          preserve aspect ratio while still using next/image
          code adapted from GitHub issue comment by @7ruth
          https://github.com/vercel/next.js/issues/18497#issuecomment-762397599
        */}
        <div className={styles.cardImgWrapperOuter}>
          <div className={styles.cardImgWrapperInner}>
            <Image
              className={styles.cardImg}
              src={image_url}
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className={styles.description} itemProp="description">
          {description}
        </div>
      </a>
    </>
  )
}
