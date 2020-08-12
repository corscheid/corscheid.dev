import { GitHubRepository } from '../lib/github'
import { formatDate } from '../lib/date'

export default function ProjectCard({ repository }: { repository: GitHubRepository }) {
  const { html_url, name, description, created_at } = repository
  return (
    <>
      <style jsx>{`
        .project-card{
          display: flex;
          flex-direction: column;
          padding: 1rem;
          justify-content: space-between;
          border: 1px solid var(--nc-bg-3);
          border-radius: 8px;
          padding: 1em;
        }
        .proj-date {
          font-size: 0.8em;
        }
      `}</style>
      <div className="project-card">
        <div className="card-header">
          <h2><a href={html_url}>{name}</a></h2>
          <time className="proj-date" dateTime={created_at} itemProp="created_at">
            {formatDate(created_at)}
          </time>
        </div>
        <div className="description" itemProp="description">{description}</div>
      </div>
    </>
  )
}