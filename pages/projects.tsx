import Layout from '../components/Layout'
import { getRepositories } from '../lib/github'
import { GitHubRepository } from '../interfaces/github-repository'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../lib/constants'

interface Props {
  projects: GitHubRepository[]
}

export default function Projects({ projects }: Props) {
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
        {projects.map(project => (
          <ProjectCard repository={project} key={project.name} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getRepositories()
  return { props: { projects } }
}
