import React from "react";

import Page from "../Page/Page";
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
      </div>
    </Page>
  );
};

export default Profile;
