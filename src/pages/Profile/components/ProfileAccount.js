import React from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "./ProfileCard";

const ProfileAccount = () => {
  const navigate = useNavigate();

  return (
    <ProfileCard
      title="Change Display Name"
      subtitle="You can change your user display name"
      image="./displayname.png"
    >
      <button
        type="button"
        className="btn btn-standard"
        onClick={() => navigate("/changeusername")}
      >
        Change Display Name
      </button>
    </ProfileCard>
  );
};

export default ProfileAccount;
