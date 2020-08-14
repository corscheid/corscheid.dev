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
  let repositories: GitHubRepository[]
  let repos_corscheid: GitHubRepository[]
  let repos_tirea: GitHubRepository[]
  let repos_fwew: GitHubRepository[]

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

    const res_corscheid = await fetch('https://api.github.com/users/corscheid/repos')
    repos_corscheid = await res_corscheid.json()
    repos_corscheid
      .filter(repository => !exclude.corscheid.includes(repository.name))
      .forEach(repo => { repositories.push(repo) })

    const res_tirea = await fetch('https://api.github.com/users/tirea/repos')
    repos_tirea = await res_tirea.json()
    repos_tirea
      .filter(repository => !exclude.tirea.includes(repository.name))
      .forEach(repo => { repositories.push(repo) })

    const res_fwew = await fetch('https://api.github.com/orgs/fwew/repos')
    repos_fwew = await res_fwew.json()
    repos_fwew
      // .filter(repository => !exclude.fwew.includes(repository.name))
      .forEach(repo => { repositories.push(repo) })

    await fs.promises.writeFile('./projects.json', JSON.stringify(repositories), 'utf-8')
  }
  return repositories.sort((a, b) => compareProjDates(a, b))
}
