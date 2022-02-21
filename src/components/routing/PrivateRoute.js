import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import store from "../../store";

import { fetchUser } from "../../redux/reducers/user";
import { fetchExercises } from "../../redux/reducers/exercises";

const PrivateRoute = () => {
  let token = localStorage.getItem("authToken");

  if (token) {
    store.dispatch(fetchUser());
    store.dispatch(fetchExercises());
  }

  return localStorage.getItem("authToken") ? (
    <Outlet />
  ) : (
    <Navigate to="/startup" />
  );
};

export default PrivateRoute;
