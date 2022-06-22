import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Auth from "./Auth/Auth";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Protected from "./Protected/Protected";
import Public from "./Public/Public";
import Root from "./Root/Root";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

export const AppRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/auth" element={<Public />}>
          <Route path="/" element={<Auth />}>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Route>
        </Route>
        <Route path="/" element={<Protected />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
