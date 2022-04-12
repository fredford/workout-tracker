import React from "react";
import Section from "../../../../components/Misc/Section";
import ChangePassword from "./ChangePassword";
import ChangeUsername from "./ChangeUsername";
import ChangePicture from "./ChangePicture";
import DeleteAccount from "./DeleteAccount";

const ProfileAccount = () => {
  return (
    <Section>
      <Section.Header>Account</Section.Header>
      <Section.Body>
        <div className="row">
          <div className="col-sm-6 mb-sm-4 mb-3">
            <ChangePassword />
          </div>
          <div className="col-sm-6 mb-sm-4 mb-3">
            <ChangeUsername />
          </div>
          <div className="col-sm-6 mb-3">
            <ChangePicture />
          </div>
          <div className="col-sm-6 mb-3">
            <DeleteAccount />
          </div>
        </div>
      </Section.Body>
    </Section>
  );
};

export default ProfileAccount;
