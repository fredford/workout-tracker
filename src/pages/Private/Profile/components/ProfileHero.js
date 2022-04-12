import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";

const ProfileHero = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  // TODO set up profile picture to show here from database

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/startup");
  };

  return (
    <div className="section-margin">
      <Card>
        <Card.Body>
          <div className="profile-hero">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <div className="">
                  <h1 className="profile-hero__title">{user.name}</h1>
                  <h5 className="profile-hero__subtitle text-muted">
                    {user.email}
                  </h5>
                </div>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <img
                  className="profile-hero__image"
                  src="./fraser-redford_profile.jpg"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
          <div className="">
            <button className="btn btn-outline-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileHero;
