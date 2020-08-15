import { GitHubRepository } from '../lib/github'
import { formatDate } from '../lib/date'

export default function ProjectCard({ repository }: { repository: GitHubRepository }) {
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
      <a href={html_url} className='project-card'>

        <div className='card-header'>
          <h2 className='proj-name'>{name}</h2>
          <time className='proj-date' dateTime={created_at} itemProp='created_at'>{formatDate(created_at)}</time>
        </div>

        <img className='card-img' src={image_url} />

        <div className='description' itemProp='description'>{description}</div>
      </a>
    </>
  )
}