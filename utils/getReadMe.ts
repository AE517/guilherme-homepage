import { Octokit } from 'octokit';

const octokit = new Octokit({});

export async function getReadMe(repository: string) {
  const response = await octokit.request('GET /repos/{owner}/{repo}/readme', {
    owner: 'guilherme-hja',
    repo: repository,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return atob(response.data.content);
}
