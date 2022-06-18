import { AppRouter } from "@routes/AppRouter";
import { ThemeProvider } from "@styles/ThemeProvider";
import { Router } from "solid-app-router";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
};

export default App;
