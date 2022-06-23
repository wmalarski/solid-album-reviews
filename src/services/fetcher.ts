import { DocumentNode } from "graphql";
import { nhost } from "./nhost";
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

export const jsonFetcher: Requester = async <Data, Variables>(
  documentNode: DocumentNode,
  variables?: Variables
) => {
  const response = await nhost.graphql.request<Data, Variables>(
    documentNode,
    variables
  );

  if (response.error) {
    const data = { definitions: documentNode.definitions, response };
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(data, null, 2));
  }

  return {
    data: response.data ?? undefined,
    errors: response.error ? (response.error as FetcherError[]) : undefined,
  };
};

export const graphqlSdk = getSdk(jsonFetcher);
