import React from "react";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import Challenges from "./components/Challenges";
import ChartRecentActivity from "./components/Charts/ChartRecentActivity";
import ChartTopExercises from "./components/Charts/ChartTopExercises";
import Goals from "./components/Goals";
import Intro from "./components/Intro";
import LastWorkout from "./components/LastWorkout";
import QuickActions from "./components/QuickActions";
import StatsGroupArea from "./components/Stats/StatsGroupArea";
import StatsGroupBasic from "./components/Stats/StatsGroupBasic";

const Dashboard = () => {
  return (
    <Page navbar>
      <Page.Body>
        <div className="mb-3">
          <Intro />
        </div>
        <div className="row">
          <div className="col-xl-6 grid-margin">
            <div className="grid-350">
              <LastWorkout />
              <QuickActions />
            </div>
            <div className="grid-margin">
              <ChartRecentActivity />
              <StatsGroupBasic />
            </div>
            <div className="grid-350">
              <Goals />
              <Challenges />
            </div>
          </div>
          <div className="col-xl-6 grid-margin">
            <ChartTopExercises />
            <StatsGroupArea />
            <ChartTopExercises />
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Dashboard;
