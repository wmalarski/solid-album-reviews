import type { Component } from "solid-js";
import { AlbumItem } from "./AlbumItem/AlbumItem";
import * as styles from "./Home.css";

const Home: Component = () => {
  return (
    <div class={styles.container}>
      <AlbumItem
        album={{
          artistByArtist: {
            id: 1,
            name: "John Lennon",
          },
          id: 1,
          sid: "85e506c2-e6d6-4d06-8490-160ed6fdd337",
          title: "Imagine",
          year: 1971,
        }}
      />
      <AlbumItem
        album={{
          artistByArtist: {
            id: 1,
            name: "John Lennon",
          },
          id: 1,
          sid: "85e506c2-e6d6-4d06-8490-160ed6fdd337",
          title: "Imagine",
          year: 1971,
        }}
      />
      <AlbumItem
        album={{
          artistByArtist: {
            id: 1,
            name: "John Lennon",
          },
          id: 1,
          sid: "85e506c2-e6d6-4d06-8490-160ed6fdd337",
          title: "Imagine",
          year: 1971,
        }}
      />
      <AlbumItem
        album={{
          artistByArtist: {
            id: 1,
            name: "John Lennon",
          },
          id: 1,
          sid: "85e506c2-e6d6-4d06-8490-160ed6fdd337",
          title: "Imagine",
          year: 1971,
        }}
      />
      <AlbumItem
        album={{
          artistByArtist: {
            id: 1,
            name: "John Lennon",
          },
          id: 1,
          sid: "85e506c2-e6d6-4d06-8490-160ed6fdd337",
          title: "Imagine",
          year: 1971,
        }}
      />
      <AlbumItem
        album={{
          artistByArtist: {
            id: 1,
            name: "John Lennon",
          },
          id: 1,
          sid: "85e506c2-e6d6-4d06-8490-160ed6fdd337",
          title: "Imagine",
          year: 1971,
        }}
      />
    </div>
  );
};

export default Home;
