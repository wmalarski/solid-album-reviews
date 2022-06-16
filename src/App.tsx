import { Header } from "@components/Header/Header";
import Home from "@routes/Home/Home";
import { ThemeProvider } from "@styles/ThemeProvider";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
