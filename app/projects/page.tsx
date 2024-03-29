import ProjectCard from '@/components/ProjectCard'
import { DOMAIN, PROJECTS } from '@/utils/constants'
import { getRepositories } from '@/utils/github'

export const metadata = {
  title: 'Projects',
  description: `Projects | ${DOMAIN}`
}

export default async function Page() {
  const projects = await getRepositories()

  return (
    <>
      <h1>{PROJECTS}</h1>
      <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(16em,1fr))]">
        {projects.map((project, idx) => (
          <ProjectCard repository={project} key={idx} priority={idx < 5} />
        ))}
      </div>
    </>
  )
}
