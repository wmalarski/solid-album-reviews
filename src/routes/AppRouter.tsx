import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Album from "./Album/Album";
import Auth from "./Auth/Auth";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Protected from "./Protected/Protected";
import Public from "./Public/Public";
import Reviews from "./Reviews/Reviews";
import Root from "./Root/Root";
import Search from "./Search/Search";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

export const AppRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/auth" element={<Public />}>
          <Route path="/" element={<Auth />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Route>
        </Route>
        <Route path="/" element={<Protected />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/album/:albumId" element={<Album />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
