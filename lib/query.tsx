interface IGraphQLQuery {
  query: string;
  variables?: object;
  auth?: boolean;
  token?: string;
  github?: boolean;
}

export const graphFetchApi = {
  async post<T>({ query, variables, auth, token, github }: IGraphQLQuery): Promise<T> {
    const response = await fetch(
      github
        ? `${process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API}`
        : `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(auth && token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ query, variables }),
      }
    );

    const json = await response.json();

    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    return json.data;
  },
};

export const restFetchApi = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  },
};
