import { graphqlSdk } from "@services/fetcher";
import { Component, createResource, For, Show } from "solid-js";
import { AlbumItem } from "./AlbumItem/AlbumItem";
import * as classes from "./Home.css";
import { requireAlbumFragment } from "./Home.utils";

const loader = () => {
  return graphqlSdk.RandomAlbums({
    limit: 5,
  });
};

const Home: Component = () => {
  const [randomAlbums] = createResource(loader);

  return (
    <div class={classes.container}>
      <For each={randomAlbums()?.data?.randomAlbums}>
        {(album) => (
          <Show when={requireAlbumFragment(album)}>
            {(album) => <AlbumItem album={album} />}
          </Show>
        )}
      </For>
    </div>
  );
};

export default Home;
