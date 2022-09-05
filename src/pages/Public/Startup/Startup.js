// Library imports
import React from "react";
import { MdLogin, MdOutlineCreate } from "react-icons/md";

// Local component imports
import Page from "../../../components/Layout/Page/Page";
import Button from "../../../components/Buttons/Button";
import BasicCard from "../../../components/Cards/BasicCard";

/**
 * Component that displays the landing page of the application
 *
 * Status: complete
 */
export default function Startup() {
  return (
    <Page center>
      <BasicCard className="startup-sizing">
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-center startup-header">Fitrak</h1>
          <h3 className="basic-card__title text-muted">Welcome</h3>
          <hr className="basic-bar" />
          <div className="d-flex flex-column large-gap w-100">
            <Button Icon={MdLogin} iconSize={25} path="/login">
              Login
            </Button>
            <Button Icon={MdOutlineCreate} iconSize={25} path="/register">
              Register
            </Button>
          </div>
        </div>
      </BasicCard>
    </Page>
  );
}
