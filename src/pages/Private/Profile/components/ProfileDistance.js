// Library imports
import React, { useContext, useState } from "react";
// Local component imports
import Card from "../../../../components/Cards/Card";
// Contexts
import { SettingsContext } from "../../../../contexts/settingsContext";

/**
 * Component to allow the user to change the distance units of the application
 *
 * Status: complete
 */
const ProfileDistance = () => {
  // Settings context for user settings
  const [settings, updateSettings] = useContext(SettingsContext);
  // Component state for if checked
  const [checkedDistance, setCheckedDistance] = useState(
    settings.distance === "km" ? false : true
  );

  // Function for updating the distance units of the application in the settingsContext
  const toggleChanger = () => {
    updateSettings("distance");
    setCheckedDistance(!checkedDistance);
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
