import { existsSync, promises } from 'fs'
import { DUMMY_IMG_URL } from './constants'
const { writeFile, readFile } = promises

export interface GitHubRepository {
  html_url: string
  name: string
  description: string
  created_at: string
  image_url: string
}

function getImageURL(repo: GitHubRepository) {
  if (existsSync(`public/images/${repo.name}.png`)) {
    return `/images/${repo.name}.png`
  }
  return `${DUMMY_IMG_URL}/?text=${repo.name}`
}

function compareProjectDates(a: GitHubRepository, b: GitHubRepository) {
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
) {
  const response = await fetch(
    `https://api.github.com/${endpoint}/${user}/repos`
  )
  const repositories = (await response.json()) as GitHubRepository[]
  return repositories.filter(
    (repository) => !excludeList.includes(repository.name)
  )
}

export async function getRepositories() {
  let repositories: GitHubRepository[]
  let corscheidRepos: GitHubRepository[]
  let tireaRepos: GitHubRepository[]
  let fwewOrgRepos: GitHubRepository[]

  const exclude = {
    corscheid: [
      'corscheid',
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
      'VrrtepIRC',
      'react-wordle'
    ],
    fwew: ['fwew.js']
  }

  if (existsSync('projects.json')) {
    const json = await readFile('./projects.json', 'utf8')
    repositories = JSON.parse(json) as GitHubRepository[]
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
