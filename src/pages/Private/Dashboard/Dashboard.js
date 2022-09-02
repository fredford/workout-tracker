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

import ChartLifeTimeGoals from "./components/Charts/ChartLifeTimeGoals";

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
    <Page navbar>
      <Intro currHr={currHr} />
      <div className="dashboard__top-container">
        <div className="dashboard__lifetime-container">
          <ChartLifeTimeGoals stats={stats} />
        </div>

        <div className="dashboard__section-quick-last">
          <LastWorkout />
          <QuickActions />
        </div>
      </div>

      <div className="dashboard__container">
        <div className="dashboard__group">
          <StatsGroupBasic stats={stats.basic} />
          <ChartRecentActivity />
        </div>
        <div className="dashboard__group">
          <StatsGroupArea stats={stats.area} />
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
