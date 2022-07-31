// Library imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Local component import
import Button from "../../../../components/Buttons/Button";

/**
 * Component for allowing the User to logout of the application
 *
 * Status: complete
 */
const ProfileLogout = () => {
  // React hooks
  const navigate = useNavigate();
  // Function to handle logging out of the application
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/startup");
  };
  return (
    <Button border onClick={handleLogout}>
      <Button.Image>
        <img className="button-image" src="./logout.png" alt="" />
      </Button.Image>
      <Button.Text>Logout</Button.Text>
    </Button>
  );
};

export default ProfileLogout;
