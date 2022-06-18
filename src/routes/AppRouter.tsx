import { ProtectedRoute } from "@utils/routing/ProtectedRoute";
import { PublicRoute } from "@utils/routing/PublicRoute";
import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Home from "./Home/Home";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import Root from "./Root/Root";

export const AppRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
