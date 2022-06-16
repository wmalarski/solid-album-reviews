import { fetch } from "cross-fetch";
import { DocumentNode } from "graphql";
import { getSdk, Requester } from "./types";

export type FetcherError = {
  message: string;
  extensions?: unknown;
};

export type FetcherActionData = {
  fetcherErrors?: FetcherError[];
};

export type FetcherPayload<Data> = {
  data?: Data;
  errors?: FetcherError[];
};

// const getGraphqlApiConfig = (): GraphqlApiConfig => {
//   invariant(
//     process.env.GRAPHQL_API_ENDPOINT,
//     `GRAPHQL_API_ENDPOINT has bad data!`
//   );

//   invariant(
//     process.env.GRAPHQL_API_ADMIN_SECRET,
//     `GRAPHQL_API_ADMIN_SECRET has bad data!`
//   );

//   return {
//     apiEndpoint: import.meta.env.VITE_GRAPHQL_API_ENDPOINT,
//     adminSecret: import.meta.env.GRAPHQL_API_ADMIN_SECRET,
//   };
// };

const apiEndpoint: string = import.meta.env.VITE_GRAPHQL_API_ENDPOINT;

export const fetcher = <Variables>(
  documentNode: DocumentNode,
  variables?: Variables
): Promise<Response> => {
  // const { adminSecret } = getGraphqlApiConfig();

  const query = documentNode.loc?.source.body;

  return fetch(apiEndpoint, {
    body: JSON.stringify({ query, variables }),
    method: "POST",
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "content-type": "application/json",
      // "x-hasura-admin-secret": adminSecret,
    },
  });
};

export const jsonFetcher: Requester = async <Data, Variables>(
  documentNode: DocumentNode,
  variables?: Variables
): Promise<FetcherPayload<Data>> => {
  const result = await fetcher(documentNode, variables);

  const json = await result.json();

  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(
      JSON.stringify({ definitions: documentNode.definitions, json }, null, 2)
    );
  }

  return json;
};

export const graphqlSdk = getSdk(jsonFetcher);
