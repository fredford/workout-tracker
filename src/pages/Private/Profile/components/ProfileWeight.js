// Library imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Local component imports
import Card from "../../../../components/Cards/Card";
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
    <Card className="card-padding h-100">
      <Card.ImageHeader path="./scale.png">
        <Card.Title>Weight</Card.Title>
        <Card.Text className="text-muted">Set the units for measuring weight</Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
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
      </Card.Body>
    </Card>
  );
};

export default ProfileWeight;
