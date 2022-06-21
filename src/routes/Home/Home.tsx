import { Header } from "@components/Header/Header";
import { Component } from "solid-js";
import { AlbumItem } from "./AlbumItem/AlbumItem";
import * as classes from "./Home.css";

// const fetcher = () => {
//   return graphqlSdk.RandomAlbums({
//     limit: 20,
//   });
// };

const Home: Component = () => {
  // const [albums, { refetch }] = createResource(fetcher);

  return (
    <div class={classes.container}>
      <Header />
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
          sid: "4f3da9b5-2333-4ebd-97df-a1bcd32166be",
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
          sid: "1e1786e5-c6da-3bcf-961d-3b21a49ee9dc",
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
          sid: "d6494c5a-a55a-45e3-a302-67bc721aadc7",
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
          sid: "65f81d45-3892-4c48-8178-00e300559cd5",
          title: "Imagine",
          year: 1971,
        }}
      />
    </div>
  );
};

export default Home;
