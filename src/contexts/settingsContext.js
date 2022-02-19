import React, { useState } from "react";

const SettingsContext = React.createContext();

const SettingsProvider = (props) => {
  const initialState = {
    theme: "light",
    weight: "lbs",
    distance: "km",
  };

  var localSettings = JSON.parse(localStorage.getItem("settings"));

  if (localSettings === null) {
    localStorage.setItem("settings", JSON.stringify(initialState));
  }

  var stateSettings = localSettings === null ? initialState : localSettings;

  const [theme, setTheme] = useState(stateSettings.theme);
  const [weight, setWeight] = useState(stateSettings.weight);
  const [distance, setDistance] = useState(stateSettings.distance);

  return (
    <SettingsContext.Provider
      value={{
        theme: [theme, setTheme],
        weight: [weight, setWeight],
        distance: [distance, setDistance],
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
