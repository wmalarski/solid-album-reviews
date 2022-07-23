import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import { homeDataLoader } from "./Home/Home.data";
import { reviewsDataLoader } from "./Reviews/Reviews.data";
import { searchDataLoader } from "./Search/Search.data";

const Album = lazy(() => import("./Album/Album"));
const Auth = lazy(() => import("./Auth/Auth"));
const Home = lazy(() => import("./Home/Home"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Protected = lazy(() => import("./Protected/Protected"));
const Public = lazy(() => import("./Public/Public"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Root = lazy(() => import("./Root/Root"));
const Search = lazy(() => import("./Search/Search"));
const SignIn = lazy(() => import("./SignIn/SignIn"));
const SignUp = lazy(() => import("./SignUp/SignUp"));

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
          <Route path="/" element={<Home />} data={homeDataLoader} />
          <Route path="/search" element={<Search />} data={searchDataLoader} />
          <Route
            path="/reviews"
            element={<Reviews />}
            data={reviewsDataLoader}
          />
          <Route path="/album/:albumId" element={<Album />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
