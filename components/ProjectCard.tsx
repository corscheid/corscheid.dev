import { GitHubRepository } from '../lib/github'
import { formatDate } from '../lib/date'

export default function ProjectCard({ repository }: { repository: GitHubRepository }) {
  const { html_url, name, description, created_at } = repository
  return (
    <div className="project-card" key={name}>
      <h2><a href={html_url}>{name}</a></h2>
      <time dateTime={created_at} itemProp="created_at">
        {formatDate(created_at)}
      </time>
      <div className="description" itemProp="description">{description}</div>
    </div>
  )
}

// TODO: Add Card Grid CSS, maybe some images