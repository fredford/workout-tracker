import React from "react";
import ProfileCard from "./ProfileCard";

import { useNavigate } from "react-router-dom";

const ProfilePassword = () => {
  const navigate = useNavigate();

  return (
    <ProfileCard
      title="Change Password"
      subtitle="You can change your account password"
      image="./password.png"
    >
      <button
        type="button"
        className="btn btn-standard"
        onClick={() => {
          navigate("/changepassword");
        }}
      >
        Change Password
      </button>
    </ProfileCard>
  );
};

export default ProfilePassword;
