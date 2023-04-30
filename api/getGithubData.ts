import { graphFetchApi } from '@/lib/query';

export const getGithubData = async () => {
  try {
    const query = `
    query {
      repository(owner: "yaoss-collection", name: "yaoss-qrcodegenerator-frontend") {
        stargazerCount
      }
    }
    `;

    const data = await graphFetchApi.post<{ repository: { stargazerCount: number } }>({
      query,
      github: true,
      auth: true,
      token: process.env.GITHUB_TOKEN,
    });

    return data.repository.stargazerCount;
  } catch (error) {
    console.error(error);
    return null;
  }
};
