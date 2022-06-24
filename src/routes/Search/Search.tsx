import { graphqlSdk } from "@services/fetcher";

import {
  Component,
  createEffect,
  createResource,
  createSignal,
  Show,
} from "solid-js";
import * as classes from "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchResults } from "./SearchResults/SearchResults";

type LoaderArgs = {
  offset: number;
  query: string;
};

const loader = ({ offset, query }: LoaderArgs) => {
  const pattern = `%${query}%`;
  return graphqlSdk.SelectAlbums({
    limit: 20,
    offset,
    where: {
      _or: [
        { title: { _ilike: pattern } },
        { artistByArtist: { name: { _ilike: pattern } } },
      ],
    },
  });
};

const Search: Component = () => {
  const [query, setQuery] = createSignal("");

  const [selectAlbums] = createResource(
    () => ({ offset: 0, query: query() }),
    loader
  );

  createEffect(() => {
    console.log("effect1", { query: query() });
  });

  createEffect(() => {
    console.log("effect2", { selectAlbums: selectAlbums() });
  });

  return (
    <div class={classes.container}>
      <SearchInput onSearchChange={setQuery} />
      <Show when={selectAlbums()?.data?.album}>
        {(albums) => <SearchResults albums={albums} />}
      </Show>
    </div>
  );
};

export default Search;
