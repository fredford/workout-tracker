import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.scss";

import { SettingsContext } from "./contexts/settingsContext";

import { Routes, Route } from "react-router-dom";

import Loading from "./pages/Utility/Loading";
import PrivateRoute from "./pages/Utility/PrivateRoute";

import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

const App = () => {
  const [settings, setSettings] = useContext(SettingsContext);

  document.documentElement.setAttribute("data-theme", settings.theme);

  return (
    <div className="App" data-theme={settings.theme}>
      <Routes>
        <Route exact path="/" element={<Loading />} />
        <Route element={<PrivateRoute />}>
          {privateRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                exact
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              exact
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
