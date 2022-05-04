import React from "react";

import Page from "../../../components/Misc/Page";

import ProfileHero from "./sections/ProfileHero";
import ProfileAccount from "./sections/ProfileAccount";
import ProfileSettings from "./sections/ProfileSettings";

const Profile = () => {
  return (
    <Page>
      <Page.NavBar />
      <Page.Body navbar>
        <ProfileHero />
        <div className="container">
          <ProfileSettings />
          <ProfileAccount />
        </div>
      </Page.Body>
    </Page>
  );
};

export default Profile;
