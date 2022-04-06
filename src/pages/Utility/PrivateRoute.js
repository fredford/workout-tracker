import React, { useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { fetchUser } from "../../redux/reducers/user";

import { useDispatch } from "react-redux";

const PrivateRoute = () => {
  var token = localStorage.getItem("authToken");

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      try {
        dispatch(fetchUser());
      } catch (e) {
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  return localStorage.getItem("authToken") ? (
    <Outlet />
  ) : (
    <Navigate to="/startup" />
  );
};

export default PrivateRoute;
