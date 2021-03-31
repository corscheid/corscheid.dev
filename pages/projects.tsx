import Layout from '../components/Layout'
import { PROJECTS } from '../lib/constants'
import ProjectCard from '../components/ProjectCard'
import { ProjectsProps } from '../interfaces'
import { getRepositories } from '../lib/github'

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Layout title={PROJECTS}>
      <h1>{PROJECTS}</h1>
      <div className="card-grid">
        <style jsx>{`
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
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getRepositories()
  return { props: { projects } }
}
