// Library imports
import React from "react";
import { useDispatch } from "react-redux";

// Local component import
import Button from "../../../../components/Buttons/Button";
import { resetUser } from "../../../../redux/reducers/user";

/**
 * Component for allowing the User to logout of the application
 *
 * Status: complete
 */
const ProfileLogout = () => {
  const dispatch = useDispatch();
  return (
    <Button
      src="./logout.png"
      alt="Logout"
      border
      path="/startup"
      onClick={() => {
        localStorage.removeItem("authToken");
        dispatch(resetUser());
      }}
    >
      Logout
    </Button>
  );
};

export default ProfileLogout;
