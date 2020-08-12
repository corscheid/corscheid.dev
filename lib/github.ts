import fs from 'fs'

export interface GitHubRepository {
  html_url: string;
  name: string;
  description: string;
  created_at: string;
}

export async function getRepositories(): Promise<GitHubRepository[]> {
  let repositories: GitHubRepository[];
  if (fs.existsSync('projects.json')) {
    const json = await fs.promises.readFile('./projects.json', 'utf8');
    repositories = JSON.parse(json);
  } else {
    const response = await fetch('https://api.github.com/users/corscheid/repos')
    repositories = await response.json()
  }
  // TODO: sort by date descending
  return repositories
}