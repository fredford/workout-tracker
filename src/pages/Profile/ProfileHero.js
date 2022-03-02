import React from "react";

import { useSelector } from "react-redux";

const ProfileHero = () => {
  const user = useSelector((state) => state.user);

  // TODO set up profile picture to show here from database

  return (
    <div className="w-100 default-card frosted-glass">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img
          className="profile-image"
          src="./fraser-redford_profile.jpg"
          alt="Profile"
        />
        <h1>{user.name}</h1>
        <h5 className="text-muted">{user.email}</h5>
      </div>
    </div>
  );
};

export default ProfileHero;
