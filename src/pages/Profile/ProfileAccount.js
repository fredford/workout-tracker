import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../../components/cards/Card";

const ProfileAccount = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  return (
    <Card title="User Information" className="profile__user">
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <p className="text-muted">Display Name</p>
          <div className="profile__user-form">
            <p>{user.name}</p>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12">
          <p className="text-muted">Email</p>
          <div className="profile__user-form mb-3">
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => navigate("/changeusername")}
        >
          Change Display Name
        </button>
      </div>
    </Card>
  );
};

export default ProfileAccount;
