// Library imports
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux store reducers
import { fetchUser } from "../../redux/reducers/user";
import { fetchExercises } from "../../redux/reducers/exercises";

/**
 * Route handler for checking if the User is authenticated
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: completed
 */
const PrivateRoute = () => {
  // React hooks
  const dispatch = useDispatch();
  // Check if the user has an authentication token
  let token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      // Attempt to use the auth token with the server, if it is invalid remove
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
