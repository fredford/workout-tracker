import React, { useState, useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsContext";

import ProfileCard from "./ProfileCard";

const ProfileDistance = () => {
  const { theme, weight, distance } = useContext(SettingsContext);

  const [stateDistance, setStateDistance] = distance;

  const [checkedDistance, setCheckedDistance] = useState(
    stateDistance === "light" ? false : true
  );

  const toggleChanger = (e) => {
    var oldSettings = JSON.parse(localStorage.getItem("settings"));

    switch (e.target.id) {
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
    <ProfileCard
      title="Distance"
      subtitle="Set the units of measurement for distance"
      image="./scale.png"
    >
      <div className="profile__settings">
        <div className="flex-column profile__settings-group  align-items-center">
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
    </ProfileCard>
  );
};

export default ProfileDistance;
