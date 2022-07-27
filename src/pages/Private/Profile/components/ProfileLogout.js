import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";

const ProfileLogout = () => {
  const navigate = useNavigate();

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
