// Library imports
import React, { useContext, useState } from "react";
// Local component imports
import Card from "../../../../components/Cards/Card";
// Contexts
import { SettingsContext } from "../../../../contexts/settingsContext";

/**
 * Component to allow the user to change the color theme of the application
 *
 * Status: complete
 */
const ProfileTheme = () => {
  // Settings context for user settings
  const [settings, updateSettings] = useContext(SettingsContext);
  // Component state for if checked
  const [checkedTheme, setCheckedTheme] = useState(
    settings.theme === "dark" ? true : false
  );

  // Function for updating theme of the application in the settingsContext
  const toggleChanger = () => {
    updateSettings("theme");
    setCheckedTheme(!checkedTheme);
  };

  console.log("there");

  return (
    <Card className="card-padding h-100 ">
      <Card.ImageHeader path="./mode.png">
        <Card.Title>Color Theme</Card.Title>
        <Card.Text className="text-muted">Set light or dark theme</Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
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
