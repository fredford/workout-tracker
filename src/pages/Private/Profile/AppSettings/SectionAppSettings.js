import React from "react";
import { Accordion } from "react-bootstrap";

import ProfileWeight from "./ProfileWeight";
import ProfileDistance from "./ProfileDistance";
import ProfileTheme from "./ProfileTheme";

const SectionAppSettings = () => {
  return (
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
  );
};

export default SectionAppSettings;
