import React, { useState, useContext } from "react";

import { SettingsContext } from "../../contexts/settingsContext";

import Card from "../../components/cards/Card";

const ProfileSettings = () => {
  const { theme, weight, distance } = useContext(SettingsContext);

  const [stateTheme, setStateTheme] = theme;
  const [stateWeight, setStateWeight] = weight;
  const [stateDistance, setStateDistance] = distance;

  const [checkedTheme, setCheckedTheme] = useState(
    stateTheme === "light" ? true : false
  );
  const [checkedWeight, setCheckedWeight] = useState(
    stateWeight === "light" ? false : true
  );
  const [checkedDistance, setCheckedDistance] = useState(
    stateDistance === "light" ? false : true
  );

  const toggleChanger = (e) => {
    var oldSettings = JSON.parse(localStorage.getItem("settings"));

    switch (e.target.id) {
      case "theme":
        oldSettings.theme = oldSettings.theme === "light" ? "dark" : "light";
        setStateTheme(oldSettings.theme);
        setCheckedTheme(!checkedTheme);
        break;
      case "weight":
        oldSettings.weight = oldSettings.weight === "lbs" ? "kg" : "lbs";
        setStateWeight(oldSettings.weight);
        setCheckedWeight(!checkedWeight);
        break;
      case "distance":
        oldSettings.distance = oldSettings.distance === "km" ? "mi" : "km";
        setStateDistance(oldSettings.distance);
        setCheckedDistance(!checkedDistance);
        break;
      default:
        break;
    }

    localStorage.setItem("settings", JSON.stringify(oldSettings));
  };

  return (
    <Card>
      <h4>App Settings</h4>

      <div className="profile__settings">
        <div className="profile__settings-group">
          <p className="text-muted mt-3 mb-1">Theme</p>
          <div className="profile__settings-form">
            <input
              id="theme"
              type="checkbox"
              checked={checkedTheme}
              onChange={toggleChanger}
            />
            <label htmlFor="theme" className="label-theme">
              <div className="theme-slider"></div>
              <span className="slider-label-left dark-mode" />
              <span className="slider-label-right light-mode" />
            </label>
          </div>
        </div>
        <div className="profile__settings-group">
          <p className="text-muted mt-3 mb-1">Weight</p>
          <div className="profile__user-form">
            <input
              id="weight"
              type="checkbox"
              checked={checkedWeight}
              onChange={toggleChanger}
            />
            <label htmlFor="weight" className="label-theme">
              <div className="theme-slider"></div>
              <span className="slider-label-left lbs-mode" />
              <span className="slider-label-right kg-mode" />
            </label>
          </div>
        </div>
        <div className="profile__settings-group">
          <p className="text-muted mt-3 mb-1">Distance</p>
          <div className="profile__user-form">
            <input
              id="distance"
              type="checkbox"
              checked={checkedDistance}
              onChange={toggleChanger}
            />
            <label htmlFor="distance" className="label-theme">
              <div className="theme-slider"></div>
              <span className="slider-label-left km-mode" />
              <span className="slider-label-right mi-mode" />
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSettings;
