import { existsSync, promises } from "fs";
import {
  DUMMY_IMG_URL,
  PROJECTS_DATA_PATH,
  PROJECTS_INCLUDE,
} from "./constants";
const { writeFile, readFile } = promises;

export interface GitHubRepository {
  html_url: string;
  name: string;
  description: string | null;
  created_at: string;
  image_url: string;
}

function getImageURL(repo: GitHubRepository) {
  if (existsSync(`public/images/${repo.name}.png`)) {
    return `/images/${repo.name}.png`;
  }
  return `${DUMMY_IMG_URL}/?text=${repo.name}`;
}

function compareProjectIndex(
  a: GitHubRepository,
  b: GitHubRepository,
  includeList: string[],
) {
  const aIndex = includeList.indexOf(a.name);
  const bIndex = includeList.indexOf(b.name);
  return aIndex < bIndex ? -1 : 1;
}

async function fetchFromGitHub(
  endpoint: string,
  user: string,
  includeList: string[],
) {
  const response = await fetch(
    `https://api.github.com/${endpoint}/${user}/repos`,
  );
  let repositories = (await response.json()) as GitHubRepository[];
  return repositories
    .filter((repository) => includeList.includes(repository.name))
    .sort((a, b) => compareProjectIndex(a, b, includeList));
}

function appendRepos(
  mainRepos: GitHubRepository[],
  currentRepos: GitHubRepository[],
) {
  currentRepos.forEach((repo) => {
    repo.image_url = getImageURL(repo);
    const { html_url, name, created_at, image_url, description } = repo;
    mainRepos.push({ html_url, name, created_at, image_url, description });
  });
}

export async function getRepositories() {
  let repositories: GitHubRepository[] = [];

  if (existsSync(PROJECTS_DATA_PATH)) {
    const json = await readFile(PROJECTS_DATA_PATH, "utf8");
    repositories = JSON.parse(json) as GitHubRepository[];
  } else {
    const args = [
      {
        endpoint: "orgs",
        user: "fwew",
        include: PROJECTS_INCLUDE.fwew,
      },
      {
        endpoint: "users",
        user: "corscheid",
        include: PROJECTS_INCLUDE.corscheid,
      },
      {
        endpoint: "users",
        user: "tirea",
        include: PROJECTS_INCLUDE.tirea,
      },
    ];

    args.forEach(async ({ endpoint, user, include }) => {
      const repos = await fetchFromGitHub(endpoint, user, include);
      appendRepos(repositories, repos);
    });

    await writeFile(PROJECTS_DATA_PATH, JSON.stringify(repositories), "utf-8");
  }
  return repositories;
}
