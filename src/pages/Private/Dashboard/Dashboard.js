// Library imports
import React, { useEffect, useState } from "react";

// Local component imports
import Page from "../../../components/Layout/Page/Page";

import Intro from "./components/Intro";
import LastWorkout from "./components/LastWorkout";
import QuickActions from "./components/QuickActions";
import StatsGroupArea from "./components/Stats/StatsGroupArea";
import StatsGroupBasic from "./components/Stats/StatsGroupBasic";
import ChartRecentActivity from "./components/Charts/ChartRecentActivity";
import ListTopExercises from "./components/Charts/ListTopExercises";
//import Challenges from "./components/Challenges";
//import Goals from "./components/Goals";

// Utilities
import services from "../../../services/services";

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
  let today = new Date();
  // Get the current hour of the day
  let currHr = today.getHours();

  // Handle data retrieved for the component state
  useEffect(() => {
    // API GET call to retrieve Basic Stats from the server
    const retrieveData = async () => {
      await services.stats.getDashboardDataBasic(setStats);
    };
    retrieveData();
  }, []);

  return (
    <Page navbar container>
      <Intro currHr={currHr} />

      <div className="dashboard__container large-gap">
        <div className="lastWorkout">
          <LastWorkout />
        </div>
        <div className="quickActions">
          <QuickActions />
        </div>
        <div className="statsBasic">
          <StatsGroupBasic stats={stats.basic} />
        </div>
        <div className="chartActivity">
          <ChartRecentActivity />
        </div>
        <div className="statsArea">
          <StatsGroupArea stats={stats.area} />
        </div>
        <div className="topExercises">
          <ListTopExercises />
        </div>
        {/*
          <div className="grid-350 grid-margin">
            <Goals />
            <Challenges />
          </div>
          */}
      </div>
    </Page>
  );
};

export default Dashboard;
