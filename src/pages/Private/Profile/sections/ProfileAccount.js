import React from "react";
import Section from "../../../../components/Misc/Section";
import ChangePassword from "../components/ChangePassword";
import ChangeUsername from "../components/ChangeUsername";
import DeleteAccount from "../components/DeleteAccount";
import ProfileLogout from "../components/ProfileLogout";

const ProfileAccount = () => {
  return (
    <Section>
      <Section.Header>Account</Section.Header>
      <Section.Body>
        <div className="grid-150">
          <ChangeUsername />
          <ChangePassword />
          <DeleteAccount />
          <ProfileLogout />
        </div>
      </Section.Body>
    </Section>
  );
};

export default ProfileAccount;
