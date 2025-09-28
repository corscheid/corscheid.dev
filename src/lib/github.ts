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
  const repositories = (await response.json()) as GitHubRepository[];
  return repositories.filter((repository) =>
    includeList.includes(repository.name),
  );
}

export async function getRepositories() {
  let repositories: GitHubRepository[];
  let corscheidRepos: GitHubRepository[];
  let tireaRepos: GitHubRepository[];
  let fwewOrgRepos: GitHubRepository[];

  if (existsSync(PROJECTS_DATA_PATH)) {
    const json = await readFile(PROJECTS_DATA_PATH, "utf8");
    repositories = JSON.parse(json) as GitHubRepository[];
  } else {
    repositories = [];

    fwewOrgRepos = await fetchFromGitHub("orgs", "fwew", PROJECTS_INCLUDE.fwew);
    fwewOrgRepos.sort((a, b) =>
      compareProjectIndex(a, b, PROJECTS_INCLUDE.fwew),
    );
    fwewOrgRepos.forEach((repo) => {
      repo.image_url = getImageURL(repo);
      const { html_url, name, created_at, image_url, description } = repo;
      repositories.push({ html_url, name, created_at, image_url, description });
    });

    corscheidRepos = await fetchFromGitHub(
      "users",
      "corscheid",
      PROJECTS_INCLUDE.corscheid,
    );
    corscheidRepos.sort((a, b) =>
      compareProjectIndex(a, b, PROJECTS_INCLUDE.corscheid),
    );
    corscheidRepos.forEach((repo) => {
      repo.image_url = getImageURL(repo);
      const { html_url, name, created_at, image_url, description } = repo;
      repositories.push({ html_url, name, created_at, image_url, description });
    });

    tireaRepos = await fetchFromGitHub(
      "users",
      "tirea",
      PROJECTS_INCLUDE.tirea,
    );
    tireaRepos.sort((a, b) =>
      compareProjectIndex(a, b, PROJECTS_INCLUDE.tirea),
    );
    tireaRepos.forEach((repo) => {
      repo.image_url = getImageURL(repo);
      const { html_url, name, created_at, image_url, description } = repo;
      repositories.push({ html_url, name, created_at, image_url, description });
    });

    await writeFile(PROJECTS_DATA_PATH, JSON.stringify(repositories), "utf-8");
  }
  return repositories;
}
