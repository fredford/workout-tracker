import React, { useEffect, useState } from "react";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import { resolve } from "../../../services/utils";
import Challenges from "./components/Challenges";
import ChartRecentActivity from "./components/Charts/ChartRecentActivity";
import ChartTopExercises from "./components/Charts/ChartTopExercises";
import Goals from "./components/Goals";
import Intro from "./components/Intro";
import LastWorkout from "./components/LastWorkout";
import QuickActions from "./components/QuickActions";
import StatsGroupArea from "./components/Stats/StatsGroupArea";
import StatsGroupBasic from "./components/Stats/StatsGroupBasic";

import StatsService from "../../../services/stats";

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const [data, error] = await resolve(StatsService.getDashboardDataBasic());

    data ? setStats(data) : console.log(error);
  };

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
            <ChartTopExercises />
          </div>
          <div className="col-xl-6">
            <StatsGroupArea stats={stats.area} />
          </div>
          {/*<div className="col-xl-6">
            <ChartTopExercises />
          </div>
          */}
        </div>
      </Page.Body>
    </Page>
  );
};

export default Dashboard;
