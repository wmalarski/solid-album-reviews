import { Component } from "solid-js";
import { AlbumItem } from "./AlbumItem/AlbumItem";
import * as styles from "./Home.css";

// const fetcher = () => {
//   return graphqlSdk.RandomAlbums({
//     limit: 20,
//   });
// };

const Home: Component = () => {
  // const [albums, { refetch }] = createResource(fetcher);

  return (
    <div class={styles.container}>
      {/* <For each={albums()?.data?.randomAlbums}>
        {(album) => <AlbumItem album={album} />}
      </For> */}
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
