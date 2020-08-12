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
        .visual {
          height: 100px;
          width: 100%;
          background: wheat;
          margin: 0.5rem 0;
        }
      `}</style>
      <div className="project-card" key={name}>
        <div className="card-header">
          <h2><a href={html_url}>{name}</a></h2>
          <time className="proj-date" dateTime={created_at} itemProp="created_at">
            {formatDate(created_at)}
          </time>
        </div>
        <div className="description" itemProp="description">{description}</div>
        {/* <img className="visual" src="" alt="" /> */}
      </div>
    </>
  )
}

// TODO: Add Card Grid CSS, maybe some images