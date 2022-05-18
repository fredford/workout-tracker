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
    <Button onClick={handleLogout}>
      <Button.Image src="./logout.png" />
      <Button.Text>Logout</Button.Text>
    </Button>
  );
};

export default ProfileLogout;
