import React from "react";
import { useSelector } from "react-redux";

import { Accordion } from "react-bootstrap";

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
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>App Settings</Accordion.Header>
            <Accordion.Body>
              <ProfileSettings />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>User Settings</Accordion.Header>
            <Accordion.Body>
              <ProfileAccount />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Page.Body>
    </Page>
  );
};

export default Profile;
