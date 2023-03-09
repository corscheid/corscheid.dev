import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { type ProjectsProps } from '../interfaces'
import { PROJECTS } from '../lib/constants'
import { getRepositories } from '../lib/github'

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Layout title={PROJECTS}>
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
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getRepositories()
  return { props: { projects } }
}
