import { Header } from "@components/Header/Header";
import { graphqlSdk } from "@services/fetcher";
import { Component, createResource, For } from "solid-js";
import { AlbumItem } from "./AlbumItem/AlbumItem";
import * as classes from "./Home.css";

const loader = () => {
  return graphqlSdk.RandomAlbums({
    limit: 5,
  });
};

const Home: Component = () => {
  const [albums] = createResource(loader);

  return (
    <div class={classes.container}>
      <Header />
      <For each={albums()?.data?.randomAlbums}>
        {(album) => <AlbumItem album={album} />}
      </For>
    </div>
  );
};

export default Home;
