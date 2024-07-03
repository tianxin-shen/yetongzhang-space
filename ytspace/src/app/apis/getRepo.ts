import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "YOUR-TOKEN",
});

export async function getPublicRepositories() {
  try {
    const response = await octokit.request("GET /repositories", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const repoNames = response.data.map(
      (repo: { full_name: any }) => repo.full_name
    );
    console.log(repoNames);
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}
