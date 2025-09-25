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

function compareProjectDates(a: GitHubRepository, b: GitHubRepository) {
  const aDate = new Date(a.created_at);
  const bDate = new Date(b.created_at);
  return aDate > bDate ? -1 : 1;
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

    corscheidRepos = await fetchFromGitHub(
      "users",
      "corscheid",
      PROJECTS_INCLUDE.corscheid,
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
    tireaRepos.forEach((repo) => {
      repo.image_url = getImageURL(repo);
      const { html_url, name, created_at, image_url, description } = repo;
      repositories.push({ html_url, name, created_at, image_url, description });
    });

    fwewOrgRepos = await fetchFromGitHub("orgs", "fwew", PROJECTS_INCLUDE.fwew);
    fwewOrgRepos.forEach((repo) => {
      repo.image_url = getImageURL(repo);
      const { html_url, name, created_at, image_url, description } = repo;
      repositories.push({ html_url, name, created_at, image_url, description });
    });

    repositories = repositories.sort((a, b) => compareProjectDates(a, b));

    await writeFile(PROJECTS_DATA_PATH, JSON.stringify(repositories), "utf-8");
  }
  return repositories;
}
