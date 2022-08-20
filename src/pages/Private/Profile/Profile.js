// Library imports
import React from "react";
import { useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
// Components
import ProfileWeight from "./components/ProfileWeight";
import ProfileDistance from "./components/ProfileDistance";
import ProfileTheme from "./components/ProfileTheme";
import ChangePassword from "./components/ChangePassword";
import ChangeUsername from "./components/ChangeUsername";
import DeleteAccount from "./components/DeleteAccount";
import ProfileLogout from "./components/ProfileLogout";

import Page from "../../../components/Layout/Page/Page";
import PageHeader from "../../../components/Layout/Page/PageHeader";

/**
 * Page for displaying the User Profile and managing settings
 *
 * Status: complete
 */
const Profile = () => {
  // Redux store user object
  const user = useSelector((state) => state.user);

  return (
    <Page navbar container>
      <PageHeader header={user.name} subheader={user.email} />
      <Accordion className="profile-accordion grid-margin">
        <Accordion.Item eventKey="0">
          <Accordion.Header>App Settings</Accordion.Header>
          <Accordion.Body className="grid-300">
            <ProfileWeight />
            <ProfileDistance />
            <ProfileTheme />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="profile-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>User Settings</Accordion.Header>
          <Accordion.Body className="grid-300">
            <ChangeUsername />
            <ChangePassword />
            <DeleteAccount />
            <ProfileLogout />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Page>
  );
};

export default Profile;
