import React from "react";

import Page from "../Page/Page";
import ProfileAppearance from "./components/ProfileAppearance";
import ProfileAccount from "./components/ProfileAccount";
import ProfileDelete from "./components/ProfileDelete";
import ProfileSettings from "./components/ProfileSettings";
import ProfilePassword from "./components/ProfilePassword";
import ProfilePicture from "./components/ProfilePicture";
import ProfileHero from "./components/ProfileHero";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/startup");
  };
  return (
    <Page>
      <div className="mt-3">
        <ProfileHero />
      </div>

      <div className="m-3">
        <h3 className="mb-2">App Settings</h3>
        <div className="row">
          <div className="col-md-6 stretch-card grid-margin">
            <ProfileSettings />
          </div>
          <div className="col-md-6 stretch-card grid-margin">
            <ProfileAppearance />
          </div>
        </div>
      </div>

      <div className="m-3">
        <h3 className="mb-2">Account Settings</h3>
        <div className="row">
          <div className="col-md-6 stretch-card grid-margin">
            <ProfileAccount />
          </div>
          <div className="col-md-6 stretch-card grid-margin">
            <ProfilePassword />
          </div>
          <div className="col-md-6 stretch-card grid-margin">
            <ProfileDelete />
          </div>
          <div className="col-md-6 stretch-card grid-margin">
            <ProfilePicture />
          </div>
          <div className="col-12 stretch-card grid-margin">
            <div className="default-card">
              <button className="btn btn-standard w-100" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Profile;
