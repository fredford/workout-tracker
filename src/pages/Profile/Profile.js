import React from "react";

import Page from "../Page/Page";
import ProfileAppearance from "./ProfileAppearance";
import ProfileCard from "./ProfileCard";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <Page title="Profile">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <ProfileCard />
        </div>
        <div className="col-xs-12 col-md-6">
          <ProfileSettings />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <ProfileAppearance />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <ProfileAppearance />
        </div>
      </div>
    </Page>
  );
};

export default Profile;
