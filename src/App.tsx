import { AppRouter } from "@routes/AppRouter";
import { SessionProvider } from "@services/SessionProvider";
import { ThemeProvider } from "@styles/ThemeProvider";
import { Router } from "solid-app-router";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <ThemeProvider>
      <Router>
        <SessionProvider>
          <AppRouter />
        </SessionProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
