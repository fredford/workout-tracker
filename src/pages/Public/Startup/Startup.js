// Library imports
import React from "react";
import { MdLogin, MdOutlineCreate } from "react-icons/md";

// Local component imports
import Page from "../../../components/Layout/Page/Page";
import Button from "../../../components/Buttons/Button";
import Card from "../../../components/Cards/Card";

/**
 * Component that displays the landing page of the application
 *
 * Status: complete
 */
export default function Startup() {
  return (
    <Page center>
      <Card className="startup-sizing">
        <Card.Body className="text-normal">
          <h1 className="text-center startup-header">Fitrak</h1>
          <Card.Header className="text-muted text-center">Welcome</Card.Header>
          <Card.Bar />
          <div className="d-flex flex-column large-gap">
            <Button Icon={MdLogin} iconSize={25} path="/login">
              Login
            </Button>
            <Button Icon={MdOutlineCreate} iconSize={25} path="/register">
              Register
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Page>
  );
}
