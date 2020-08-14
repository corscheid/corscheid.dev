import fs from 'fs'

export interface GitHubRepository {
  html_url: string
  name: string
  description: string
  created_at: string
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

async function fetchFromGitHub(endpoint: string, user: string, excludeList: string[]): Promise<GitHubRepository[]> {
  const response = await fetch(`https://api.github.com/${endpoint}/${user}/repos`)
  const repositories: GitHubRepository[] = await response.json()
  return repositories.filter(repository => !excludeList.includes(repository.name))
}

export async function getRepositories(): Promise<GitHubRepository[]> {
  let repositories: GitHubRepository[]
  let corscheidRepos: GitHubRepository[]
  let tireaRepos: GitHubRepository[]
  let fwewOrgRepos: GitHubRepository[]

  const exclude = {
    corscheid: ['corscheid.github.io', 'fwew', 'fwew-api', 'fwew-react', 'nextjs-blog', 'php-sqlite-login'],
    tirea: ['fwew', 'fwew-discord', 'LearnNavi', 'ralpengyu', 'Tree-of-Voices-Online'],
    // fwew: [],
  }

  if (fs.existsSync('projects.json')) {
    const json = await fs.promises.readFile('./projects.json', 'utf8')
    repositories = JSON.parse(json)
  } else {
    repositories = []

    corscheidRepos = await fetchFromGitHub('users', 'corscheid', exclude.corscheid)
    corscheidRepos.forEach(repo => { repositories.push(repo) })

    tireaRepos = await fetchFromGitHub('users', 'tirea', exclude.tirea)
    tireaRepos.forEach(repo => { repositories.push(repo) })

    fwewOrgRepos = await fetchFromGitHub('orgs', 'fwew', [])
    fwewOrgRepos.forEach(repo => { repositories.push(repo) })

    await fs.promises.writeFile('./projects.json', JSON.stringify(repositories), 'utf-8')
  }
  return repositories.sort((a, b) => compareProjDates(a, b))
}
