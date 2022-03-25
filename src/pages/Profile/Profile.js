import React from "react";

import Page from "../../components/utility/Page";
import ProfileAppearance from "./components/ProfileAppearance";

import ProfileSettings from "./components/ProfileDistance";
import ProfileWeight from "./components/ProfileWeight";

import ProfilePicture from "./components/ProfilePicture";
import ProfileHero from "./components/ProfileHero";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="mt-3">
        <ProfileHero />
      </div>

      <div className="m-3">
        <h3 className="mb-2">App Settings</h3>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <ProfileWeight />
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <ProfileSettings />
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <ProfileAppearance />
          </div>
        </div>
      </div>

      <div className="m-3">
        <h3 className="mb-2">Account Settings</h3>
        <div className="row">
          <div className="col-sm-6 col-xl-3 stretch-card grid-margin">
            <ProfileCard
              title="Change Display Name"
              subtitle="You can change your user display name"
              image="./displayname.png"
              className="popout-card"
              path="/changeusername"
            />
          </div>
          <div className="col-sm-6 col-xl-3 stretch-card grid-margin">
            <ProfileCard
              title="Change Password"
              subtitle="You can change your account password"
              image="./password.png"
              className="popout-card"
              path="/changepassword"
            />
          </div>
          <div className="col-sm-6 col-xl-3 stretch-card grid-margin">
            <ProfileCard
              title="Delete Account"
              subtitle="You can permanently delete your account"
              image="./delete.png"
              className="popout-card"
              path="/deleteaccount"
            />
          </div>
          <div className="col-sm-6 col-xl-3 stretch-card grid-margin">
            <ProfileCard
              title="Profile Picture"
              subtitle="Add or change your profile picture"
              image="./profile.png"
              className="popout-card"
              path="/changepicture"
            />
          </div>
          <div className="col-12 stretch-card grid-margin">
            <ProfileCard
              title="Logout"
              image="./logout.png"
              className="popout-card"
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Profile;
