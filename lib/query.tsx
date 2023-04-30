interface IGraphQLQuery {
  query: string;
  variables?: object;
}

export const graphFetchApi = {
  async post<T>({ query, variables }: IGraphQLQuery): Promise<T> {
    const response = await fetch(`${process.env.api}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

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
