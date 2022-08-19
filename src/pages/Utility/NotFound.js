// Library imports
import React from "react";
import { useNavigate } from "react-router-dom";
import { BiHome } from "react-icons/bi";

// Local component imports
import Page from "../../components/Layout/Page/Page";
import Button from "../../components/Buttons/buttons";

/**
 * Page that displays when the path is not found
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: completed
 */
const NotFound = () => {
  // React hooks
  const navigate = useNavigate();
  // Check if the user has an authentication token
  let token = localStorage.getItem("authToken");

  return (
    <Page navbar={token} center>
      <div className="d-flex flex-column text-normal">
        <h1>404: Page not found</h1>
        <h4>We're sorry, we couldn't find the page you requested.</h4>
        {!token ? (
          <Button className="mt-3" Icon={BiHome} iconSize={25} onClick={() => navigate("/startup")}>
            Return to Startup
          </Button>
        ) : (
          <></>
        )}
      </div>
    </Page>
  );
};

export default NotFound;
