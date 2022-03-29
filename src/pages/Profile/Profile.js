import React from "react";

import Page from "../../components/utility/Page";
import ButtonCard from "../../components/cards/ButtonCard";

import ProfileAppearance from "./components/ProfileAppearance";
import ProfileSettings from "./components/ProfileDistance";
import ProfileWeight from "./components/ProfileWeight";
import ProfileHero from "./components/ProfileHero";

const Profile = () => {
  return (
    <Page>
      <Page.NavBar />
      <Page.Body className="navbar-wrapper">
        <div className="me-3 ms-3 grid-margin">
          <ProfileHero />
        </div>

        <div className="me-3 ms-3">
          <h3 className="mb-2">App Settings</h3>
          <div className="row">
            <div className="col-md-4 stretch-card grid-margin">
              <ProfileWeight />
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <ProfileSettings />
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <ProfileAppearance />
            </div>
          </div>
        </div>

        <div className="me-3 ms-3">
          <h3 className="mb-2">Account Settings</h3>
          <div className="row">
            {buttons.map((button) => (
              <div
                key={button.path}
                className="col-sm-6 col-xl-3 stretch-card grid-margin"
              >
                <ButtonCard path={button.path} className={button.color}>
                  <ButtonCard.Image>{button.image}</ButtonCard.Image>
                  <ButtonCard.Title>{button.title}</ButtonCard.Title>
                  <ButtonCard.Subtitle>{button.subtitle}</ButtonCard.Subtitle>
                </ButtonCard>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center">
            <ButtonCard logout className="logout-button">
              <ButtonCard.Image>./logout.png</ButtonCard.Image>
              <ButtonCard.Title>Logout</ButtonCard.Title>
            </ButtonCard>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

const buttons = [
  {
    path: "/changeusername",
    image: "./displayname.png",
    title: "Change Display Name",
    subtitle: "You can change your user display name",
    color: "color-main",
  },
  {
    path: "/changepassword",
    image: "./password.png",
    title: "Change Password",
    subtitle: "You can change your user password",
    color: "color-main",
  },
  {
    path: "/changepicture",
    image: "./profile.png",
    title: "Profile Picture",
    subtitle: "You can change your user profile picture",
    color: "color-main",
  },
  {
    path: "/deleteaccount",
    image: "./delete.png",
    title: "Delete Account",
    subtitle: "You can permanently delete your account",
    color: "color-main",
  },
];

export default Profile;
