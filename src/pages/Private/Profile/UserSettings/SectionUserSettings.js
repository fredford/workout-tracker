import React from "react";
import { Accordion } from "react-bootstrap";
import ChangeUsername from "./ChangeUsername";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import ProfileLogout from "./ProfileLogout";

const SectionUserSettings = () => {
  return (
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
  );
};

export default SectionUserSettings;
