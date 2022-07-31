// Library imports
import React, { useContext, useState } from "react";
// Local component imports
import Card from "../../../../components/Cards/Card";
// Local context
import { SettingsContext } from "../../../../contexts/settingsContext";

/**
 * Component that allows a user to change the weight units used in the application
 *
 * Status: complete
 */
const ProfileWeight = () => {
  // Settings context for user settings
  const [settings, updateSettings] = useContext(SettingsContext);
  // Component state for if checked
  const [checkedWeight, setCheckedWeight] = useState(
    settings.weight === "lbs" ? false : true
  );

  // Function for toggling the units for measuring weight in the application
  const toggleChanger = () => {
    updateSettings("weight");
    setCheckedWeight(!checkedWeight);
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
