// Library imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiScales2Line } from "react-icons/ri";
// Local component imports
import IconCard from "../../../../components/Cards/IconCard";
//Redux Store
import { updateUser } from "../../../../redux/reducers/user";

/**
 * Component that allows a user to change the weight units used in the application
 *
 * Status: complete
 */
const ProfileWeight = () => {
  // React hooks
  const dispatch = useDispatch();
  // Redux store user
  const user = useSelector((state) => state.user);

  // Function for toggling the units for measuring weight in the application
  const toggleChanger = () => {
    let newUser = { ...user };
    newUser.weight = user.weight === "lbs" ? "kg" : "lbs";

    try {
      dispatch(updateUser(newUser));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IconCard
      className="card-padding h-100"
      title="Weight"
      subtitle="Set the units for measuring weight"
      Icon={RiScales2Line}
    >
      <div className="profile-settings__button-container">
        <input
          id="weight"
          type="checkbox"
          checked={user.weight === "lbs" ? false : true}
          onChange={toggleChanger}
        />
        <label htmlFor="weight" className="label-theme">
          <div className="theme-slider"></div>
          <span className="slider-label-left lbs-mode" />
          <span className="slider-label-right kg-mode" />
        </label>
      </div>
    </IconCard>
  );
};

export default ProfileWeight;
