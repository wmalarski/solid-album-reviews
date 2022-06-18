import { fetch } from "cross-fetch";
import { DocumentNode } from "graphql";
import { session } from "./SessionProvider";
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

const apiEndpoint: string = import.meta.env.VITE_GRAPHQL_API_ENDPOINT;

export const jsonFetcher: Requester = async <Data, Variables>(
  documentNode: DocumentNode,
  variables?: Variables
): Promise<FetcherPayload<Data>> => {
  const query = documentNode.loc?.source.body;

  const sessionState = session();
  const accessToken =
    sessionState.status === "auth"
      ? { Authorization: `Bearer ${sessionState.accessToken}` }
      : null;

  const result = await fetch(apiEndpoint, {
    body: JSON.stringify({ query, variables }),
    method: "POST",
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "content-type": "application/json",
      ...accessToken,
    },
  });

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
