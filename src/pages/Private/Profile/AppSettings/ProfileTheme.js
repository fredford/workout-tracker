// Library imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Local component imports
import Card from "../../../../components/Cards/Card";
import BasicCard from "../../../../components/Cards/BasicCard";
//Redux Store
import { updateUser } from "../../../../redux/reducers/user";

/**
 * Component to allow the user to change the color theme of the application
 *
 * Status: complete
 */
const ProfileTheme = () => {
  // React hooks
  const dispatch = useDispatch();
  // Redux store user
  const user = useSelector((state) => state.user);

  // Function for updating theme of the application
  const toggleChanger = () => {
    let newUser = { ...user };
    newUser.theme = user.theme === "light" ? "dark" : "light";

    try {
      dispatch(updateUser(newUser));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BasicCard className="h-100">
      <Card.ImageHeader path="./mode.png">
        <Card.Title>Color Theme</Card.Title>
        <Card.Text className="text-muted">Set light or dark theme</Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
          <input
            id="theme"
            type="checkbox"
            checked={user.theme !== "dark"}
            onChange={toggleChanger}
          />
          <label htmlFor="theme" className="label-theme">
            <div className="theme-slider"></div>
            <span className="slider-label-left dark-mode" />
            <span className="slider-label-right light-mode" />
          </label>
        </div>
      </Card.Body>
    </BasicCard>
  );
};

export default ProfileTheme;
