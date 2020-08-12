import Layout from '../components/Layout'
import { getRepositories, GitHubRepository } from '../lib/github'
import ProjectCard from '../components/ProjectCard'

export default function Projects({ projects }: { projects: GitHubRepository[] }) {
  return (
    <Layout title="Projects">
      <h1>Projects</h1>
      <div className="card-grid">
        <style jsx>{`
          .card-grid {
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
          }
        `}</style>
        {projects.map((project) => (
          <ProjectCard repository={project} key={project.name} />
        ))}

      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getRepositories();
  return { props: { projects } };
}