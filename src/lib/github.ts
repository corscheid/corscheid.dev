import { DUMMY_IMG_URL, PROJECTS, PROJECTS_DATA_PATH } from "@/lib/constants";
import { existsSync, promises } from "fs";
const { writeFile, readFile } = promises;

export interface GitHubRepository {
  html_url: string;
  name: string;
  description: string | null;
  created_at: string;
  image_url: string;
}

/**
 * Get image URL for a GitHub Repository
 *
 * @param {GitHubRepository} repo GitHub Repository object
 * @returns {string} URL of image for repo
 */
function getImageURL(repo: GitHubRepository): string {
  if (existsSync(`public/images/${repo.name}.png`)) {
    return `/images/${repo.name}.png`;
  }
  return `${DUMMY_IMG_URL}/?text=${repo.name}`;
}

/**
 * Sort function for GitHub Repositories according to their position in the include list by name.
 *
 * @param {GitHubRepository} a first GitHub Repository
 * @param {GitHubRepository} b second GitHub Repository
 * @param {string[]} includeList list of GitHub Repository names
 * @returns {number} -1 when a should come first, otherwise 1
 */
function compareProjectIndex(
  a: GitHubRepository,
  b: GitHubRepository,
  includeList: string[],
): number {
  const aIndex = includeList.indexOf(a.name);
  const bIndex = includeList.indexOf(b.name);
  return aIndex < bIndex ? -1 : 1;
}

/**
 * Fetcher function to get all GitHub repositories by an Org or User
 *
 * @param {string} endpoint "orgs" | "users"
 * @param {string} user GitHub username
 * @param {string[]} includeList array of GitHub repository names to consider/include
 * @returns {Promise<GitHubRepository[]>} GitHub Repository array
 */
async function fetchFromGitHub(
  endpoint: string,
  user: string,
  includeList: string[],
): Promise<GitHubRepository[]> {
  const response = await fetch(
    `https://api.github.com/${endpoint}/${user}/repos`,
  );
  let repositories = (await response.json()) as GitHubRepository[];
  return repositories
    .filter((repository) => includeList.includes(repository.name))
    .sort((a, b) => compareProjectIndex(a, b, includeList));
}

/**
 * Append currentRepos to mainRepos after setting image property
 *
 * @param {GitHubRepository[]} mainRepos main array of GitHub Repositories
 * @param {GitHubRepository[]} currentRepos current array of GitHub Repositories to append
 */
function appendRepos(
  mainRepos: GitHubRepository[],
  currentRepos: GitHubRepository[],
): void {
  currentRepos.forEach((repo) => {
    repo.image_url = getImageURL(repo);
    const { html_url, name, created_at, image_url, description } = repo;
    mainRepos.push({ html_url, name, created_at, image_url, description });
  });
}

/**
 * Main function to get all curated GitHub Repositories by either reading the
 * JSON file from disk or fetching from GitHub to create the file
 *
 * @returns {Promise<GitHubRepository[]>} Final Array of GitHub Repositories
 */
export async function getRepositories(): Promise<GitHubRepository[]> {
  let repositories: GitHubRepository[] = [];

  if (existsSync(PROJECTS_DATA_PATH)) {
    const json = await readFile(PROJECTS_DATA_PATH, "utf8");
    repositories = JSON.parse(json) as GitHubRepository[];
  } else {
    const args = [
      { endpoint: "orgs", user: "fwew", include: PROJECTS.fwew },
      { endpoint: "users", user: "corscheid", include: PROJECTS.corscheid },
      { endpoint: "users", user: "tirea", include: PROJECTS.tirea },
    ];

    for (let arg of args) {
      const repos = await fetchFromGitHub(arg.endpoint, arg.user, arg.include);
      appendRepos(repositories, repos);
    }

    await writeFile(PROJECTS_DATA_PATH, JSON.stringify(repositories), "utf-8");
  }

  return repositories;
}
