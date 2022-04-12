import React from "react";

import Page from "../../../components/Misc/Page";

import ProfileHero from "./components/ProfileHero";
import ProfileAccount from "./components/ProfileAccount";
import ProfileSettings from "./components/ProfileSettings";

const Profile = () => {
  return (
    <Page>
      <Page.NavBar />
      <Page.Body className="navbar-page container">
        <ProfileHero />
        <ProfileSettings />
        <ProfileAccount />
      </Page.Body>
    </Page>
  );
};

export default Profile;
