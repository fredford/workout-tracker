import React, { useState, useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsContext";

import ProfileCard from "./ProfileCard";

const ProfileSettings = () => {
  const { theme, weight, distance } = useContext(SettingsContext);

  const [stateWeight, setStateWeight] = weight;

  const [checkedWeight, setCheckedWeight] = useState(
    stateWeight === "light" ? false : true
  );

  const toggleChanger = (e) => {
    var oldSettings = JSON.parse(localStorage.getItem("settings"));

    switch (e.target.id) {
      case "weight":
        oldSettings.weight = oldSettings.weight === "lbs" ? "kg" : "lbs";
        setStateWeight(oldSettings.weight);
        setCheckedWeight(!checkedWeight);
        break;

      default:
        break;
    }

    localStorage.setItem("settings", JSON.stringify(oldSettings));
  };

  return (
    <ProfileCard
      title="Weight"
      subtitle="Set the units of measurement for weight"
      image="./scale.png"
    >
      <div className="profile__settings">
        <div className="flex-column profile__settings-group align-items-center">
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
      </div>
    </ProfileCard>
  );
};

export default ProfileSettings;
