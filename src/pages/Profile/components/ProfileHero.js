import React from "react";

import { useSelector } from "react-redux";
import Card from "../../../components/cards/Card";

const ProfileHero = () => {
  const user = useSelector((state) => state.user);

  // TODO set up profile picture to show here from database

  return (
    <Card className="profile-hero ">
      <div className="profile-hero__background-wrapper">
        <div className="profile-hero__content">
          <img
            className="profile-hero__image"
            src="./fraser-redford_profile.jpg"
            alt="Profile"
          />
          <h1 className="profile-hero__title">{user.name}</h1>
          <h5 className="profile-hero__subtitle text-muted">{user.email}</h5>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHero;
