import React from "react";
import ButtonLink from "../../../components/Buttons/ButtonLink";

import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";

export default function Startup() {
  return (
    <Page>
      <Page.Body center>
        <Card>
          <Card.Body>
            <Card.Header className="text-center">Workout Tracker</Card.Header>
            <Card.Title className="text-muted text-center">Welcome</Card.Title>
            <Card.Bar />
            <div className="d-flex flex-column">
              <ButtonLink className="mb-3 p-3 w-100" path="/login">
                <ButtonLink.Image className="mb-2" src="login.png" />
                <ButtonLink.Text>Login</ButtonLink.Text>
              </ButtonLink>
              <ButtonLink className="p-3 w-100" path="/register">
                <ButtonLink.Image className="mb-2" src="register.png" />
                <ButtonLink.Text>Register</ButtonLink.Text>
              </ButtonLink>
            </div>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
}
