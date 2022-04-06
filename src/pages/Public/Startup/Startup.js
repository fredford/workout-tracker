import React from "react";
import LinkButton from "../../../components/Buttons/LinkButton";

import Card from "../../../components/Cards/Card";
//import StartupCard from "../../components/cards/StartupCard";
import Page from "../../../components/Misc/Page";

export default function Startup() {
  return (
    <Page>
      <Page.Body className="center-page">
        <Card>
          <Card.Body>
            <Card.Title>Workout Tracker</Card.Title>
            <Card.Subtitle className="text-muted text-center">
              Welcome
            </Card.Subtitle>
            <Card.Bar />
            <LinkButton className="mb-3" path="/login">
              <LinkButton.Image path="core.png" />
              <LinkButton.Text>Login</LinkButton.Text>
            </LinkButton>
            <LinkButton path="/register"></LinkButton>
          </Card.Body>
        </Card>
        {/*<StartupCard title="Welcome">
          <Link to="/login">
            <button className="btn btn-primary w-100 mb-3">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-primary w-100">Register</button>
          </Link>
        </StartupCard>
  */}
      </Page.Body>
    </Page>
  );
}
