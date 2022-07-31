// Library imports
import React, { useEffect, useState } from "react";

// Local component imports
import Page from "../../../components/Misc/Page";
import Intro from "./components/Intro";
import LastWorkout from "./components/LastWorkout";
import QuickActions from "./components/QuickActions";
import StatsGroupArea from "./components/Stats/StatsGroupArea";
import StatsGroupBasic from "./components/Stats/StatsGroupBasic";
import ChartRecentActivity from "./components/Charts/ChartRecentActivity";
import ListTopExercises from "./components/Charts/ListTopExercises";
import Challenges from "./components/Challenges";
import Goals from "./components/Goals";

// Utilities
import StatsService from "../../../services/stats";
import api from "../../../services/sendRequest";

/**
 * Page that displays the main dashboard for the application
 *
 * Status: complete
 *
 * Future:
 * - TODO implement functionality to Goals feature
 * - TODO implement functionality to Challenges feature
 */
const Dashboard = () => {
  // State variable for dashboard stats
  const [stats, setStats] = useState({});

  // Get the Time and current Hour for the Intro component
  var today = new Date();
  // Get the current hour of the day
  var currHr = today.getHours();

  // Handle data retrieved for the component state
  useEffect(() => {
    // API GET call to retrieve Basic Stats from the server
    api.fetch(StatsService.getDashboardDataBasic(), setStats);
  }, []);

  return (
    <Page navbar>
      <Page.Body>
        <div className="mb-3">
          <Intro currHr={currHr} />
        </div>
        <div className="row">
          <div className="col-xl-6 grid-margin">
            <div className="grid-350">
              <LastWorkout />
              <QuickActions />
            </div>
          </div>
          <div className="col-xl-6 grid-margin">
            <ChartRecentActivity />
          </div>
          <div className="col-xl-6 grid-margin">
            <StatsGroupBasic stats={stats.basic} />
          </div>
          {/*
          <div className="grid-350 grid-margin">
            <Goals />
            <Challenges />
          </div>
          */}
          <div className="col-xl-6 grid-margin">
            <ListTopExercises />
          </div>
          <div className="col-xl-6">
            <StatsGroupArea stats={stats.area} />
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Dashboard;
