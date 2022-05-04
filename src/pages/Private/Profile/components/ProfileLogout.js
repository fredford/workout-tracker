import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonImage from "../../../../components/Buttons/ButtonImage";

const ProfileLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/startup");
  };
  return (
    <ButtonImage onClick={handleLogout}>
      <ButtonImage.Image src="./logout.png" />
      <ButtonImage.Text>Logout</ButtonImage.Text>
    </ButtonImage>
  );
};

export default ProfileLogout;
