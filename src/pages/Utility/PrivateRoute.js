import React, { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { fetchUser } from "../../redux/reducers/user";

import { useDispatch } from "react-redux";
import { fetchExercises } from "../../redux/reducers/exercises";

const PrivateRoute = () => {
  var token = localStorage.getItem("authToken");

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      try {
        dispatch(fetchUser());
        dispatch(fetchExercises());
      } catch (e) {
        localStorage.removeItem("authToken");
      }
    }
  }, [token, dispatch]);

  return localStorage.getItem("authToken") ? (
    <Outlet />
  ) : (
    <Navigate to="/startup" />
  );
};

export default PrivateRoute;
