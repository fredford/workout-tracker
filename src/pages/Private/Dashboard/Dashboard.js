import React from "react";
import Page from "../../../components/Misc/Page";

const Dashboard = () => {
  return (
    <Page>
      <Page.NavBar />
      <Page.Header navbar container>
        Dashboard
      </Page.Header>
      <Page.Body container>Hello</Page.Body>
    </Page>
  );
};

export default Dashboard;
