import ProjectCard from '@/components/ProjectCard'
import { DOMAIN, PROJECTS } from '@/lib/constants'
import { getRepositories } from '@/lib/github'

export const metadata = {
  title: 'Projects',
  description: `Projects | ${DOMAIN}`
}

export default async function Page() {
  const projects = await getRepositories()

  return (
    <>
      <h1>{PROJECTS}</h1>
      <div className="card-grid">
        <style>{`
          .card-grid {
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
          }
        `}</style>
        {projects.map((project, idx) => (
          <ProjectCard repository={project} key={idx} priority={idx < 5} />
        ))}
      </div>
    </>
  )
}
