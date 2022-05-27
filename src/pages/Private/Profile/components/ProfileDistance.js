import React, { useContext, useState } from "react";

import Card from "../../../../components/Cards/Card";

import { SettingsContext } from "../../../../contexts/settingsContext";

const ProfileDistance = () => {
  const { theme, weight, distance } = useContext(SettingsContext);

  const [stateDistance, setStateDistance] = distance;

  const [checkedDistance, setCheckedDistance] = useState(
    stateDistance === "km" ? false : true
  );

  const toggleChanger = (e) => {
    var oldSettings = JSON.parse(localStorage.getItem("settings"));

    oldSettings.distance = oldSettings.distance === "km" ? "mi" : "km";
    setStateDistance(oldSettings.distance);
    setCheckedDistance(!checkedDistance);

    localStorage.setItem("settings", JSON.stringify(oldSettings));
  };

  return (
    <Card className="card-padding h-100">
      <Card.ImageHeader path="./distance.png">
        <Card.Title>Distance</Card.Title>
        <Card.Text className="text-muted">
          Set the units for measuring distance
        </Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
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
      </Card.Body>
    </Card>
  );
};

export default ProfileDistance;
