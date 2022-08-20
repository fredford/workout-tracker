// Library imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

// Utility components
import Loading from "./pages/Utility/Loading";
import PrivateRoute from "./pages/Utility/PrivateRoute";

// Available routes
import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

/**
 * Baseline for the application, routes the user to public or private routes based on
 * authentication status with the server.
 *
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: complete
 */
const App = () => {
  // Get the Redux user
  const user = useSelector((state) => state.user);

  // Set the CSS theme to be used
  document.documentElement.setAttribute("data-theme", user.theme);

  return (
    <div className="App" data-theme={user.theme}>
      <Routes>
        <Route exact path="/" element={<Loading />} />
        <Route element={<PrivateRoute />}>
          {privateRoutes.map((route, index) => {
            return <Route key={index} exact path={route.path} element={route.element} />;
          })}
        </Route>
        {publicRoutes.map((route, index) => {
          return <Route key={index} exact path={route.path} element={route.element} />;
        })}
      </Routes>
    </div>
  );
};

export default App;
