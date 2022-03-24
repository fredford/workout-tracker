import React from "react";

import { useSelector } from "react-redux";

const ProfileHero = () => {
  const user = useSelector((state) => state.user);

  // TODO set up profile picture to show here from database

  return (
    <div className="profile-hero">
      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <div className="">
            <h1 className="profile-hero__title">{user.name}</h1>
            <h5 className="profile-hero__subtitle text-muted">{user.email}</h5>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img
            className="profile-image"
            src="./fraser-redford_profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
