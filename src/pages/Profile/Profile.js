import React from "react";

import Page from "../../components/utility/Page";
import ButtonCard from "../../components/cards/ButtonCard";

import ProfileAppearance from "./components/ProfileAppearance";
import ProfileSettings from "./components/ProfileDistance";
import ProfileWeight from "./components/ProfileWeight";
import ProfileHero from "./components/ProfileHero";

const Profile = () => {
  return (
    <Page>
      <div className="m-3">
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
            <ButtonCard
              title="Change Display Name"
              subtitle="You can change your user display name"
              image="./displayname.png"
              path="/changeusername"
            />
          </div>
          <div className="col-sm-6 col-xl-3 stretch-card grid-margin">
            <ButtonCard
              title="Change Password"
              subtitle="You can change your account password"
              image="./password.png"
              path="/changepassword"
            />
          </div>
          <div className="col-sm-6 col-xl-3 stretch-card grid-margin">
            <ButtonCard
              title="Delete Account"
              subtitle="You can permanently delete your account"
              image="./delete.png"
              path="/deleteaccount"
            />
          </div>
          <div className="col-sm-6 col-xl-3 stretch-card grid-margin">
            <ButtonCard
              title="Profile Picture"
              subtitle="Add or change your profile picture"
              image="./profile.png"
              path="/changepicture"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <ButtonCard
            title="Logout"
            image="./logout.png"
            className="logout-button"
          />
        </div>
      </div>
    </Page>
  );
};

export default Profile;
