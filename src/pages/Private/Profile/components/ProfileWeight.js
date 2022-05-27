import React, { useContext, useState } from "react";

import Card from "../../../../components/Cards/Card";

import { SettingsContext } from "../../../../contexts/settingsContext";

const ProfileWeight = () => {
  const { theme, weight, distance } = useContext(SettingsContext);

  const [stateWeight, setStateWeight] = weight;
  const [checkedWeight, setCheckedWeight] = useState(
    stateWeight === "lbs" ? false : true
  );

  const toggleChanger = (e) => {
    var oldSettings = JSON.parse(localStorage.getItem("settings"));

    oldSettings.weight = oldSettings.weight === "lbs" ? "kg" : "lbs";
    setStateWeight(oldSettings.weight);
    setCheckedWeight(!checkedWeight);

    localStorage.setItem("settings", JSON.stringify(oldSettings));
  };

  return (
    <Card className="card-padding h-100">
      <Card.ImageHeader path="./scale.png">
        <Card.Title>Weight</Card.Title>
        <Card.Text className="text-muted">
          Set the units for measuring weight
        </Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
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
      </Card.Body>
    </Card>
  );
};

export default ProfileWeight;
