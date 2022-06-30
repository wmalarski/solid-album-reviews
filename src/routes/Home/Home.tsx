import { Component } from "solid-js";
import { AlbumsGrid } from "./AlbumsGrid/AlbumsGrid";
import { HomeResourceProvider } from "./Home.utils";

const Home: Component = () => {
  return (
    <HomeResourceProvider>
      <AlbumsGrid />
    </HomeResourceProvider>
  );
};

export default Home;
