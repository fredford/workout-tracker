import React from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "./ProfileCard";

const ProfileAccount = () => {
  const navigate = useNavigate();

  return (
    <ProfileCard
      title="Change Username"
      subtitle="You can change your user display name"
    >
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => navigate("/changeusername")}
      >
        Change Display Name
      </button>
    </ProfileCard>
  );
};

export default ProfileAccount;
