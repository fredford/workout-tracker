// Library imports
import React from "react";
import {useNavigate} from "react-router-dom";
import {BiHome} from "react-icons/bi"

// Local component imports
import Page from "../../components/Misc/Page";
import Button from "../../components/Buttons/Button";

/**
 * Page that displays when the path is not found
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: completed
 */
const NotFound = () => {
  // React hooks
  const navigate = useNavigate()
  // Check if the user has an authentication token
  let token = localStorage.getItem("authToken");

  return (
    <Page navbar={token}>
      <Page.Body center>
        <div className="d-flex flex-column text-normal">
          <h1>404: Page not found</h1>
          <h4>We're sorry, we couldn't find the page you requested.</h4>
          {!token ? <Button className={"mt-3"} onClick={() => navigate('/startup')}>
            <Button.Icon><BiHome size={25}/></Button.Icon>
            <Button.Text>Return to Startup</Button.Text>
          </Button> : <></>}
        </div>
      </Page.Body>
    </Page>
  );
};

export default NotFound;
