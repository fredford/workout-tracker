import React from "react";
import { useSelector } from "react-redux";
// Components
import Page from "../../../components/Misc/Page";
import ProfileAccount from "./sections/ProfileAccount";
import ProfileSettings from "./sections/ProfileSettings";

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <Page>
      <Page.NavBar />
      <Page.Header container navbar header={user.name} subheader={user.email} />
      <Page.Body container>
        <ProfileSettings />
        <ProfileAccount />
      </Page.Body>
    </Page>
  );
};

export default Profile;
