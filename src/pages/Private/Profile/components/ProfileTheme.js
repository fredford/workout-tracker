// Library imports
import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Local component imports
import Card from "../../../../components/Cards/Card";
// Contexts
import { SettingsContext } from "../../../../contexts/settingsContext";
// Redux import
import { updateUser } from "../../../../redux/reducers/user";

/**
 * Component to allow the user to change the color theme of the application
 *
 * Status: complete
 */
const ProfileTheme = () => {
  // React hooks
  const dispatch = useDispatch();
  // Redux store user object
  const user = useSelector((state) => state.user);
  // Settings context variables
  const { theme } = useContext(SettingsContext);
  // Component state variables for the Theme
  const [stateTheme, setStateTheme] = theme;
  const [checkedTheme, setCheckedTheme] = useState(
    stateTheme === "dark" ? true : false
  );

  // Function for updating the Redux store and localStorage for the theme
  const toggleChanger = async (e) => {
    // Get the local settings information
    var oldSettings = JSON.parse(localStorage.getItem("settings"));
    // Make the change to the new theme value
    oldSettings.theme = oldSettings.theme === "light" ? "dark" : "light";
    // Change the component state data
    setStateTheme(oldSettings.theme);
    setCheckedTheme(!checkedTheme);
    // Set the local storage settings information
    localStorage.setItem("settings", JSON.stringify(oldSettings));

    // Update the user theme and use Redux dispatch to update the user
    var newUser = { ...user };
    newUser.theme = oldSettings.theme;

    try {
      await dispatch(updateUser(newUser));
    } catch (err) {
      console.log(err);
    }
  };

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
