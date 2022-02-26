import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const ProfileDelete = () => {
  const navigate = useNavigate();
  return (
    <ProfileCard
      title="Delete Account"
      subtitle="You can permanently delete your account"
    >
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => navigate("/deleteaccount")}
      >
        Delete Account
      </button>
    </ProfileCard>
  );
};

export default ProfileDelete;
