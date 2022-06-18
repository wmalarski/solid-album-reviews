import { ProtectedRoute } from "@utils/routing/ProtectedRoute";
import { PublicRoute } from "@utils/routing/PublicRoute";
import { Outlet, Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Home from "./Home/Home";
import Login from "./Login/Login";
import LoginCallback from "./LoginCallback/LoginCallback";
import NotFound from "./NotFound/NotFound";
import Root from "./Root/Root";

export const AppRouter: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <Outlet />
            </PublicRoute>
          }
        >
          <Route path="/" element={<Login />} />
          <Route path="/callback" element={<LoginCallback />} />
        </Route>
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
