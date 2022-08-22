// Library imports
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

// Local components
import Loading from "../Utility/Loading";

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
  // App starting
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      // Attempt to use the auth token with the server, if it is invalid remove
      try {
        dispatch(fetchUser()).then(
          (res) => {
            setLoading(false);
          },
          (rej) => {
            setLoading(false);
          }
        );
        dispatch(fetchExercises());
      } catch (e) {
        localStorage.removeItem("authToken");
      }
    }
  }, [token, dispatch]);

  if (loading) return <Loading />;

  return localStorage.getItem("authToken") ? <Outlet /> : <Navigate to="/startup" />;
};

export default PrivateRoute;
