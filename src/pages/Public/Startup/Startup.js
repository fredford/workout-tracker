import React from "react";
import Button from "../../../components/Buttons/Button";

import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";

export default function Startup() {
  console.log("here??");
  return (
    <Page>
      <Page.Body center>
        <Card>
          <Card.Body>
            <h1 className="text-center">Workout Tracker</h1>
            <Card.Header className="text-muted text-center">
              Welcome
            </Card.Header>
            <Card.Bar />
            <div className="d-flex flex-column">
              <Button className="mb-3 p-3 w-100" path="/login">
                <Button.Image className="mb-2" src="login.png" />
                <Button.Text>Login</Button.Text>
              </Button>
              <Button className="p-3 w-100" path="/register">
                <Button.Image className="mb-2" src="register.png" />
                <Button.Text>Register</Button.Text>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
}
