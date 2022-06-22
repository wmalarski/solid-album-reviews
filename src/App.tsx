import { AppRouter } from "@routes/AppRouter";
import { NhostProvider } from "@services/nhost";
import { I18nContext } from "@solid-primitives/i18n";
import { ThemeProvider } from "@styles/ThemeProvider";
import { i18next } from "@utils/i18next";
import { Router } from "solid-app-router";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <I18nContext.Provider value={i18next}>
      <ThemeProvider>
        <NhostProvider>
          <Router>
            <AppRouter />
          </Router>
        </NhostProvider>
      </ThemeProvider>
    </I18nContext.Provider>
  );
};

export default App;
