import { existsSync, promises } from 'fs'

import { GitHubRepository } from '../interfaces/github-repository'
const { writeFile, readFile } = promises

function getImageURL(repo: GitHubRepository): string {
  if (existsSync(`public/images/${repo.name}.png`)) {
    return `/images/${repo.name}.png`
  }
  return `https://dummyimage.com/1188x792/282C34/eee/?text=${repo.name}`
}

function compareProjectDates(a: GitHubRepository, b: GitHubRepository): number {
  const aDate = new Date(a.created_at)
  const bDate = new Date(b.created_at)
  // sort descending
  if (aDate > bDate) {
    return -1
  } else {
    return 1
  }
}

async function fetchFromGitHub(
  endpoint: string,
  user: string,
  excludeList: string[]
): Promise<GitHubRepository[]> {
  const response = await fetch(
    `https://api.github.com/${endpoint}/${user}/repos`
  )
  const repositories: GitHubRepository[] = await response.json()
  return repositories.filter(
    (repository) => !excludeList.includes(repository.name)
  )
}

export async function getRepositories(): Promise<GitHubRepository[]> {
  let repositories: GitHubRepository[]
  let corscheidRepos: GitHubRepository[]
  let tireaRepos: GitHubRepository[]
  let fwewOrgRepos: GitHubRepository[]

  const exclude = {
    corscheid: [
      'corscheid.github.io',
      'fwew',
      'fwew-api',
      'fwew-react',
      'nextjs-blog',
      'php-sqlite-login'
    ],
    tirea: [
      'Horen',
      'fwew',
      'fwew-discord',
      'LearnNavi',
      'Naviteri-HTML',
      'navi-sentence-generator',
      'ralpengyu',
      'Tree-of-Voices-Online',
      'canon',
      'dict-navi-discord',
      'tr-material',
      'tirea-learnnavi-org',
      'ln-forum-js',
      'vrrtepcli',
      'VrrtepIRC'
    ],
    fwew: []
  }

  if (existsSync('projects.json')) {
    const json = await readFile('./projects.json', 'utf8')
    repositories = JSON.parse(json)
  } else {
    repositories = []

    corscheidRepos = await fetchFromGitHub(
      'users',
      'corscheid',
      exclude.corscheid
    )
    corscheidRepos.forEach((repo) => {
      repo.image_url = getImageURL(repo)
      const { html_url, name, created_at, image_url, description } = repo
      repositories.push({ html_url, name, created_at, image_url, description })
    })

    tireaRepos = await fetchFromGitHub('users', 'tirea', exclude.tirea)
    tireaRepos.forEach((repo) => {
      repo.image_url = getImageURL(repo)
      const { html_url, name, created_at, image_url, description } = repo
      repositories.push({ html_url, name, created_at, image_url, description })
    })

    fwewOrgRepos = await fetchFromGitHub('orgs', 'fwew', exclude.fwew)
    fwewOrgRepos.forEach((repo) => {
      repo.image_url = getImageURL(repo)
      const { html_url, name, created_at, image_url, description } = repo
      repositories.push({ html_url, name, created_at, image_url, description })
    })

    repositories = repositories.sort((a, b) => compareProjectDates(a, b))

    await writeFile('./projects.json', JSON.stringify(repositories), 'utf-8')
  }
  return repositories
}
