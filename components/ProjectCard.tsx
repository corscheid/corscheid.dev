import { type GitHubRepository } from '@/utils/github'
import Image from 'next/image'
import { formatDate } from '../utils/date'

export default function ProjectCard({
  repository,
  priority
}: {
  repository: GitHubRepository
  priority: boolean
}) {
  const { html_url, name, description, created_at, image_url } = repository
  return (
    <a
      href={html_url}
      className="flex flex-col p-4 content-between border border-[var(--nc-bg-3)] rounded-lg h-96 hover:border-[var(--nc-tx-2)] hover:text-[var(--nc-lk-2)] hover:no-underline"
    >
      <div>
        <h2 className="text-[var(--nc-lk-1)] hover:text-[var(--nc-lk-2)] hover:no-underline">
          {name}
        </h2>
        <time className="text-[var(--nc-tx-2)] text-xs" dateTime={created_at}>
          {formatDate(created_at)}
        </time>
      </div>
      <div className="relative max-w-full h-full my-4">
        <Image
          src={image_url}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
      <div className="text-[var(--nc-tx-2)]">{description}</div>
    </a>
  )
}
