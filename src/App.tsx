import { Header } from "@components/Header/Header";
import Home from "@routes/Home/Home";
import { AuthProvider } from "@services/AuthProvider";
import { ThemeProvider } from "@styles/ThemeProvider";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div>
          <Header />
          <Home />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
