import React, { useContext, useState } from "react";

import Card from "../../../../components/Cards/Card";

import { SettingsContext } from "../../../../contexts/settingsContext";

const ProfileTheme = () => {
  const { theme, weight, distance } = useContext(SettingsContext);

  const [stateTheme, setStateTheme] = theme;

  const [checkedTheme, setCheckedTheme] = useState(
    stateTheme === "dark" ? true : false
  );

  const toggleChanger = (e) => {
    var oldSettings = JSON.parse(localStorage.getItem("settings"));

    oldSettings.theme = oldSettings.theme === "light" ? "dark" : "light";
    setStateTheme(oldSettings.theme);
    setCheckedTheme(!checkedTheme);

    localStorage.setItem("settings", JSON.stringify(oldSettings));
  };

  return (
    <Card className="card-padding h-100">
      <Card.ImageHeader path="./mode.png">
        <Card.Title>Color Theme</Card.Title>
        <Card.Subtitle className="text-muted">
          Set light or dark theme
        </Card.Subtitle>
      </Card.ImageHeader>
      <Card.Body className="pb-0">
        <div className="d-flex justify-content-center">
          <input
            id="theme"
            type="checkbox"
            checked={checkedTheme}
            onChange={toggleChanger}
          />
          <label htmlFor="theme" className="label-theme">
            <div className="theme-slider"></div>
            <span className="slider-label-left light-mode" />
            <span className="slider-label-right dark-mode" />
          </label>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileTheme;
