import React from "react";

import { useSelector } from "react-redux";

import Card from "../../../../components/Cards/Card";

const ProfileHero = () => {
  const user = useSelector((state) => state.user);

  return (
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
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileHero;
