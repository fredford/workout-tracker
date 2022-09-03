// Library imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiScales2Line } from "react-icons/ri";
// Local component imports
import BasicCard from "../../../../components/Cards/BasicCard";
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
    <BasicCard className="h-100" title="Distance" subtitle="Set the units for measuring distance">
      <div className="profile-settings-card">
        <div className="icon-image">
          <RiScales2Line size={25} className="w-100" />
        </div>
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
      </div>
    </BasicCard>
  );
};

export default ProfileDistance;
