import React from "react";

import Page from "../Page/Page";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <Page title="Profile">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <ProfileCard />
        </div>
      </div>
    </Page>
  );
};

export default Profile;
