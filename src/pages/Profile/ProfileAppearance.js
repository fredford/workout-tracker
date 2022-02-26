import React, { useContext, useState } from "react";
import ProfileCard from "./ProfileCard";

import { SettingsContext } from "../../contexts/settingsContext";

const ProfileAppearance = () => {
  const { theme } = useContext(SettingsContext);

  const [stateTheme, setStateTheme] = theme;

  const [checkedTheme, setCheckedTheme] = useState(
    stateTheme === "light" ? true : false
  );

  const toggleTheme = (e) => {
    var oldSettings = JSON.parse(localStorage.getItem("settings"));

    oldSettings.theme = oldSettings.theme === "light" ? "dark" : "light";
    setStateTheme(oldSettings.theme);
    setCheckedTheme(!checkedTheme);
    localStorage.setItem("settings", JSON.stringify(oldSettings));
  };

  return (
    <ProfileCard title="Appearance" subtitle="Set the colour scheme of the app">
      <input
        id="theme"
        type="checkbox"
        checked={checkedTheme}
        onChange={toggleTheme}
      />
      <label htmlFor="theme" className="label-theme">
        <div className="theme-slider"></div>
        <span className="slider-label-left dark-mode" />
        <span className="slider-label-right light-mode" />
      </label>
    </ProfileCard>
  );
};

export default ProfileAppearance;
