// Library imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiRulerLine } from "react-icons/ri";
// Local component imports
import IconCard from "../../../../components/Cards/IconCard";
//Redux Store
import { updateUser } from "../../../../redux/reducers/user";

/**
 * Component to allow the user to change the distance units of the application
 *
 * Status: complete
 */
const ProfileDistance = () => {
  // React hooks
  const dispatch = useDispatch();
  // Redux store user
  const user = useSelector((state) => state.user);

  // Function for updating the distance units of the application
  const toggleChanger = () => {
    let newUser = { ...user };
    newUser.distance = user.distance === "km" ? "mi" : "km";

    try {
      dispatch(updateUser(newUser));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IconCard
      className="h-100"
      title="Distance"
      subtitle="Set the units for measuring distance"
      Icon={RiRulerLine}
    >
      <div className="profile-settings__button-container">
        <input
          id="distance"
          type="checkbox"
          checked={user.distance !== "km"}
          onChange={toggleChanger}
        />
        <label htmlFor="distance" className="label-theme">
          <div className="theme-slider"></div>
          <span className="slider-label-left mi-mode" />
          <span className="slider-label-right km-mode" />
        </label>
      </div>
    </IconCard>
  );
};

export default ProfileDistance;
