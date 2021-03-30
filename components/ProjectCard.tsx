import Image from 'next/image'
import { GitHubRepository } from '../lib/github'
import { formatDate } from '../lib/date'

export default function ProjectCard({
  repository
}: {
  repository: GitHubRepository
}) {
  const { html_url, name, description, created_at, image_url } = repository
  return (
    <>
      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          justify-content: space-between;
          border: 1px solid var(--nc-bg-3);
          border-radius: 8px;
          padding: 1em;
        }
        .project-card:hover {
          border: 1px solid var(--nc-tx-2);
          color: var(--nc-lk-2);
          text-decoration: none;
        }
        .proj-name {
          color: var(--nc-lk-1);
        }
        .proj-name:hover {
          color: var(--nc-lk-2);
          text-decoration: underline;
        }
        .proj-date {
          color: var(--nc-tx-2);
          font-size: 0.8em;
        }
        .card-img {
          width: 100%;
          border-radius: 8px;
        }
        .description {
          color: var(--nc-tx-2);
        }
      `}</style>
      <a href={html_url} className="project-card">
        <div className="card-header">
          <h2 className="proj-name">{name}</h2>
          <time
            className="proj-date"
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
        <div style={{height: '250px'}}>
          <div style={{
            position: 'relative',
            maxWidth: '100%',
            height: '100%'
          }}>
            <Image
              className="card-img"
              src={image_url}
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="description" itemProp="description">
          {description}
        </div>
      </a>
    </>
  )
}
