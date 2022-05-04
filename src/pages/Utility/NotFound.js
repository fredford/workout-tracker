import React from "react";
import Page from "../../components/Misc/Page";

const NotFound = () => {
  return (
    <Page>
      <Page.NavBar />
      <Page.Body center>
        <div className="d-flex flex-column">
          <h1>404: Page not found</h1>
          <h4>We're sorry, we couldn't find the page you requested.</h4>
        </div>
      </Page.Body>
    </Page>
  );
};

export default NotFound;
