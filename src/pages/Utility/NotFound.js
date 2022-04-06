import React from "react";
import Page from "../../components/Misc/Page";

const NotFound = () => {
  return (
    <Page>
      <Page.NavBar />
      <Page.Body className="center-page">
        <div className="d-flex flex-column">
          <h2>404: Page not found</h2>
          <h5>We're sorry, we couldn't find the page you requested.</h5>
        </div>
      </Page.Body>
    </Page>
  );
};

export default NotFound;
