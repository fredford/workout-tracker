// Library imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineDarkMode } from "react-icons/md";
// Local component imports
import IconCard from "../../../../components/Cards/IconCard";
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
    <IconCard
      className="h-100"
      Icon={MdOutlineDarkMode}
      title="Theme"
      subtitle="Set light or dark theme"
    >
      <div className="profile-settings__button-container">
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
    </IconCard>
  );
};

export default ProfileTheme;
