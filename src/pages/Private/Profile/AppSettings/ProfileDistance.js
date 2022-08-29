// Library imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Local component imports
import Card from "../../../../components/Cards/Card";
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
    <Card className="card-padding h-100">
      <Card.ImageHeader path="./distance.png">
        <Card.Title>Distance</Card.Title>
        <Card.Text className="text-muted">Set the units for measuring distance</Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
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
      </Card.Body>
    </Card>
  );
};

export default ProfileDistance;
