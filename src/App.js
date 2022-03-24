import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.scss";

import { SettingsContext } from "./contexts/settingsContext";
import Router from "./Router";

const App = () => {
  const { theme } = useContext(SettingsContext);

  document.documentElement.setAttribute("data-theme", theme[0]);

  console.log(theme);

  return (
    <div className="App" data-theme={theme[0]}>
      <Router />
    </div>
  );
};

export default App;
