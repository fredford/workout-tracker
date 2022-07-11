import React from "react";
import { MdLogin, MdOutlineCreate } from "react-icons/md";
import Button from "../../../components/Buttons/Button";

import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";

export default function Startup() {
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
              <Button border className="mb-3" path="/login">
                <Button.Icon>
                  <MdLogin size={25} />
                </Button.Icon>
                <Button.Text>Login</Button.Text>
              </Button>
              <Button border path="/register">
                <Button.Icon>
                  <MdOutlineCreate size={25} />
                </Button.Icon>
                <Button.Text>Register</Button.Text>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
}
