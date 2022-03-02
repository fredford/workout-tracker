import React from "react";

import Page from "../Page/Page";
import ProfileAppearance from "./ProfileAppearance";
import ProfileAccount from "./ProfileAccount";
import ProfileDelete from "./ProfileDelete";
import ProfileSettings from "./ProfileSettings";
import ProfilePassword from "./ProfilePassword";
import ProfilePicture from "./ProfilePicture";
import ProfileHero from "./ProfileHero";

const Profile = () => {
  return (
    <Page>
      <div className="mb-3">
        <ProfileHero />
      </div>

      <div className="mb-3">
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

      <div className="mb-3">
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
        </div>
      </div>
    </Page>
  );
};

export default Profile;
