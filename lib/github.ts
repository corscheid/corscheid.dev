import fs from 'fs'

export interface GitHubRepository {
  html_url: string;
  name: string;
  description: string;
  created_at: string;
}

function compareProjDates(a: GitHubRepository, b: GitHubRepository): number {
  const aDate = new Date(a.created_at)
  const bDate = new Date(b.created_at)
  // sort descending
  if (aDate > bDate) {
    return -1
  } else {
    return 1
  }
}

export async function getRepositories(): Promise<GitHubRepository[]> {
  let repositories: GitHubRepository[];
  const exclude = ['corscheid.github.io']

  if (fs.existsSync('projects.json')) {
    const json = await fs.promises.readFile('./projects.json', 'utf8')
    repositories = JSON.parse(json);
  } else {
    const response = await fetch('https://api.github.com/users/corscheid/repos')
    repositories = await response.json()
    await fs.promises.writeFile('./projects.json', 'utf-8')
  }
  return repositories
    .filter(repository => !exclude.includes(repository.name))
    .sort((a, b) => compareProjDates(a, b))
}