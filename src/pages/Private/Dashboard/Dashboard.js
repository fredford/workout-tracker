import React from "react";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import ChartRecentActivity from "./components/ChartRecentActivity";
import Intro from "./components/Intro";
import StatsGroupArea from "./components/StatsGroupArea";
import StatsGroupBasic from "./components/StatsGroupBasic";

const Dashboard = () => {
  return (
    <Page navbar>
      <Page.Body>
        <div className="dashboard__container">
          <div className="dashboard__left-container">
            <Intro />
            <StatsGroupBasic />
            <ChartRecentActivity />
            <StatsGroupArea />
          </div>
          <div className="dashboard__middle-container">
            <Card className="h-100">
              <Card.Header>Small Card</Card.Header>
            </Card>
          </div>
          <div className="dashboard__right-container">
            <Card className="h-100">
              <Card.Header>Small Card</Card.Header>
            </Card>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Dashboard;
