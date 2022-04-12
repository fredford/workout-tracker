import React from "react";
import Section from "../../../../components/Misc/Section";
import ChangePassword from "../components/ChangePassword";
import ChangeUsername from "../components/ChangeUsername";
import ChangePicture from "../components/ChangePicture";
import DeleteAccount from "../components/DeleteAccount";

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
