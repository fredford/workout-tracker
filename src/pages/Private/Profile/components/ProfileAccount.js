import React from "react";
import Button from "../../../../components/Buttons/Button";
import ButtonLink from "../../../../components/Buttons/ButtonLink";
import Card from "../../../../components/Cards/Card";
import Section from "../../../../components/Misc/Section";
import ChangePassword from "./ChangePassword";

const ProfileAccount = () => {
  return (
    <Section>
      <Section.Header>Account</Section.Header>
      <Section.Body>
        <Card>
          <Card.Body>
            <div className="row">
              <div className="col-6 mb-2">
                <ChangePassword />
              </div>
              <div className="col-6 mb-2">
                <ButtonLink path="/changepassword">
                  <ButtonLink.Text>Change Password</ButtonLink.Text>
                </ButtonLink>
              </div>
              <div className="col-6">
                <ButtonLink path="/changepassword">
                  <ButtonLink.Text>Change Password</ButtonLink.Text>
                </ButtonLink>
              </div>
              <div className="col-6">
                <ButtonLink path="/changepassword">
                  <ButtonLink.Text>Change Password</ButtonLink.Text>
                </ButtonLink>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className="row">
          <div className="col card-margin"></div>
        </div>
      </Section.Body>
    </Section>
  );
};

export default ProfileAccount;
