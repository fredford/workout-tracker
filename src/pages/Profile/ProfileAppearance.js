import React, { useContext, useState } from "react";
import Card from "../../components/cards/Card";

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
    <Card title="Appearance">
      <h6 className="text-muted">Set the colour scheme of the app</h6>
      <div className="profile__settings-group">
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
      </div>
    </Card>
  );
};

export default ProfileAppearance;
