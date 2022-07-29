import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import { albumDataLoader } from "./Album/Album.data";
import { albumReviewsDataLoader } from "./AlbumReviews/AlbumReviews.data";
import { homeDataLoader } from "./Home/Home.data";
import { reviewsDataLoader } from "./Reviews/Reviews.data";
import { reviewsGridDataLoader } from "./ReviewsGrid/ReviewsGrid.data";
import { searchDataLoader } from "./Search/Search.data";

export const AppRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" component={lazy(() => import("./Root/Root"))}>
        <Route path="/auth" component={lazy(() => import("./Public/Public"))}>
          <Route path="/" component={lazy(() => import("./Auth/Auth"))}>
            <Route path="/" component={lazy(() => import("./SignIn/SignIn"))} />
            <Route
              path="/signUp"
              component={lazy(() => import("./SignUp/SignUp"))}
            />
          </Route>
        </Route>
        <Route path="/" component={lazy(() => import("./Protected/Protected"))}>
          <Route
            path="/"
            component={lazy(() => import("./Home/Home"))}
            data={homeDataLoader}
          />
          <Route
            path="/search"
            component={lazy(() => import("./Search/Search"))}
            data={searchDataLoader}
          />
          <Route
            path="/reviews"
            component={lazy(() => import("./Reviews/Reviews"))}
            data={reviewsDataLoader}
          >
            <Route
              path="/"
              component={lazy(() => import("./ReviewsGrid/ReviewsGrid"))}
              data={reviewsGridDataLoader}
            />
          </Route>
          <Route
            path="/album/:albumId"
            component={lazy(() => import("./Album/Album"))}
            data={albumDataLoader}
          >
            <Route
              path="/"
              component={lazy(() => import("./AlbumReviews/AlbumReviews"))}
              data={albumReviewsDataLoader}
            />
          </Route>
        </Route>
      </Route>
      <Route path="*" component={lazy(() => import("./NotFound/NotFound"))} />
    </Routes>
  );
};
