import ProjectCard from '@/components/ProjectCard'
import { DOMAIN, PROJECTS } from '@/lib/constants'
import { getRepositories } from '@/lib/github'
import styles from '@/styles/Projects.module.css'

export const metadata = {
  title: 'Projects',
  description: `Projects | ${DOMAIN}`
}

export default async function Page() {
  const projects = await getRepositories()

  return (
    <>
      <h1>{PROJECTS}</h1>
      <div className={styles.cardGrid}>
        {projects.map((project, idx) => (
          <ProjectCard repository={project} key={idx} priority={idx < 5} />
        ))}
      </div>
    </>
  )
}
