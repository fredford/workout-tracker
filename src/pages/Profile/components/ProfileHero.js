import React from "react";

import { useSelector } from "react-redux";

const ProfileHero = () => {
  const user = useSelector((state) => state.user);

  // TODO set up profile picture to show here from database

  return (
    <div className="profile-hero frosted-glass">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img
          className="profile-image"
          src="./fraser-redford_profile.jpg"
          alt="Profile"
        />
        <h1 className="profile-hero__title">{user.name}</h1>
        <h5 className="profile-hero__subtitle">{user.email}</h5>
      </div>
    </div>
  );
};

export default ProfileHero;
