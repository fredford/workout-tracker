import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../redux/reducers/user";

const SettingsContext = React.createContext();

const SettingsProvider = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const initialState = {
    settings: {
      theme: "light",
      weight: "lbs",
      distance: "km",
    },
  };

  var localSettings = JSON.parse(localStorage.getItem("settings"));

  if (localSettings === null) {
    localStorage.setItem("settings", JSON.stringify(initialState));
  }

  var stateSettings = localSettings === null ? initialState : localSettings;

  const [settings, setSettings] = useState(stateSettings);

  const updateSettings = async (type) => {
    var oldSettings = JSON.parse(localStorage.getItem("settings"));
    var options = settingsOptions[type];

    oldSettings[type] =
      oldSettings[type] === options.option1 ? options.option2 : options.option1;

    setSettings(oldSettings);
    localStorage.setItem("settings", JSON.stringify(oldSettings));

    if (type === "theme") {
      var newUser = { ...user };
      newUser.theme = oldSettings.theme;

      try {
        await dispatch(updateUser(newUser));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <SettingsContext.Provider value={[settings, updateSettings]}>
      {props.children}
    </SettingsContext.Provider>
  );
};

const settingsOptions = {
  theme: {
    option1: "light",
    option2: "dark",
  },
  distance: {
    option1: "km",
    option2: "mi",
  },
  weight: {
    option1: "lbs",
    option2: "kg",
  },
};

export { SettingsContext, SettingsProvider };
