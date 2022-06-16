import { Header } from "@components/Header/Header";
import { ThemeProvider } from "@styles/ThemeProvider";
import type { Component } from "solid-js";
import styles from "./App.module.css";
import logo from "./logo.svg";

const App: Component = () => {
  return (
    <ThemeProvider>
      <div class={styles.App}>
        <Header />
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
