import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Home from "./Home/Home";
import Login from "./Login/Login";
import LoginCallback from "./LoginCallback/LoginCallback";
import NotFound from "./NotFound/NotFound";
import Protected from "./Protected/Protected";
import Public from "./Public/Public";
import Root from "./Root/Root";

export const AppRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/auth" element={<Public />}>
          <Route path="/" element={<Login />} />
          <Route path="/callback" element={<LoginCallback />} />
        </Route>
        <Route path="/" element={<Protected />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
