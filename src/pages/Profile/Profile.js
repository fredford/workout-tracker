import React from "react";

import Page from "../Page/Page";
import ProfileAppearance from "./ProfileAppearance";
import ProfileAccount from "./ProfileAccount";
import ProfileDelete from "./ProfileDelete";
import ProfileSettings from "./ProfileSettings";
import ProfilePassword from "./ProfilePassword";

const Profile = () => {
  return (
    <Page title="Profile">
      <div className="row grid-top">
        <div className="col-xs-12 col-md-6 stretch-card grid-margin">
          <ProfileAccount />
        </div>
        <div className="col-xs-12 col-md-6 stretch-card grid-margin">
          <ProfileSettings />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 stretch-card grid-margin">
          <ProfilePassword />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 stretch-card grid-margin">
          <ProfileAppearance />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 stretch-card grid-margin">
          <ProfileDelete />
        </div>
      </div>
    </Page>
  );
};

export default Profile;
