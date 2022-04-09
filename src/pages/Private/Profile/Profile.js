import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLink from "../../../components/Buttons/ButtonLink";

import Page from "../../../components/Misc/Page";
import Card from "../../../components/Cards/Card";
import ProfileHero from "./components/ProfileHero";
import ProfileAccount from "./components/ProfileAccount";
import ProfileSettings from "./components/ProfileSettings";

const Profile = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/startup");
  };

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
