import React from "react";
import ButtonLink from "../../../components/Buttons/ButtonLink";

import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";

export default function Startup() {
  return (
    <Page>
      <Page.Body className="center-page">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Workout Tracker</Card.Title>
            <Card.Subtitle className="text-muted text-center">
              Welcome
            </Card.Subtitle>
            <Card.Bar />
            <ButtonLink className="mb-3 p-3" path="/login">
              <ButtonLink.Image className="mb-2" src="login.png" />
              <ButtonLink.Text>Login</ButtonLink.Text>
            </ButtonLink>
            <ButtonLink className="p-3" path="/register">
              <ButtonLink.Image className="mb-2" src="register.png" />
              <ButtonLink.Text>Register</ButtonLink.Text>
            </ButtonLink>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
}
