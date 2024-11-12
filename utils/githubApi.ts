import { Octokit } from 'octokit';

const octokit = new Octokit({});
//Github API returns a large quantity of data, this aims to use only the necessary for the 'projects' page,
export type Repo = {
  name: string;
  url: string;
  description: string;
  homepage?: string; //Optional | On empty returns ''
  language: string;
  topics: Array<object>;
};

export default async function () {
  const response = await octokit.request('GET /users/{username}/repos', {
    username: 'guilherme-hja',
    header: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  return response.data.map((repo: any) => {
    return <Repo>{
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      homepage: repo.homepage,
      language: repo.language,
      topics: repo.topics,
    };
  });
}
