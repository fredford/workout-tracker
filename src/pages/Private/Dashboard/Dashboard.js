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
import useApi from "../../../services/useApi";

/**
 * Component that displays the main dashboard for the application
 *
 * Status: in-progress, in use
 *
 * TODO: This components needs functionality to be implemented for the Goals
 * component and the Challenges component
 */
const Dashboard = () => {
  // State variable for dashboard stats
  const [stats, setStats] = useState({});

  // API GET call to retrieve Basic Stats from the server
  const { data } = useApi(StatsService.getDashboardDataBasic);

  // Handle data retrieved for the component state
  useEffect(() => {
    // Set the data for the stats of the dashboard
    if (data) setStats(data);
  }, [data]);

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
          </div>
          <div className="col-xl-6 grid-margin">
            <ChartRecentActivity />
          </div>
          <div className="col-xl-6 grid-margin">
            <StatsGroupBasic stats={stats.basic} />
          </div>
          {/*
            TODO Add features for Goals and Challenges
            <div className="grid-350">
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
