// Library imports
import React from "react";

// Local component import
import Button from "../../../../components/Buttons/Button";

/**
 * Component for allowing the User to logout of the application
 *
 * Status: complete
 */
const ProfileLogout = () => {
  return (
    <Button
      src="./logout.png"
      alt="Logout"
      border
      path="/startup"
      onClick={() => localStorage.removeItem("authToken")}
    >
      Logout
    </Button>
  );
};

export default ProfileLogout;
