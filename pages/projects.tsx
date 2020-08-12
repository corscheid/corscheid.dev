import Layout from '../components/Layout'
import { getRepositories, GitHubRepository } from '../lib/github'
import ProjectCard from '../components/ProjectCard'

export default function Projects({ projects }: { projects: GitHubRepository[] }) {
  return (
    <Layout title="Projects">
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard repository={project} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getRepositories();
  return { props: { projects } };
}