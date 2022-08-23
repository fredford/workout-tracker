// Library imports
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Local component imports
import Page from "../../../components/Layout/Page/Page";
import PageHeader from "../../../components/Layout/Page/PageHeader";
import ListExercises from "./sections/ListExercises";
import StatsListExercises from "../../../components/Stats/StatsListExercises";
// Contexts
import { ActivityProvider } from "../../../contexts/activityContext";
// Redux reducers
import { fetchExercises } from "../../../redux/reducers/exercises";
// Utilities
import services from "../../../services/services";

/**
 * Page to display Exercises for the User, add new Exercises and see data on individual Exercise's
 *
 * Status: complete
 */
const Exercises = () => {
  // React hooks
  const dispatch = useDispatch();
  const [date, setDate] = useState("week");
  const [area, setArea] = useState("all");
  const [stats, setStats] = useState([]);

  useEffect(() => {
    retrieveAllExercises();
    retrieveAllStats();
  }, [date, area]);

  console.log(stats);

  // Retrieve All Exercises using Redux reducer
  const retrieveAllExercises = async () => {
    try {
      dispatch(fetchExercises());
    } catch (error) {
      console.log(`Exercises page, fetch exercises error: ${error}`);
    }
  };

  const retrieveAllStats = async () => {
    await services.stats.getTopExercises(area, date, "all", setStats);
  };

  return (
    <ActivityProvider>
      <Page navbar container>
        <PageHeader header="Exercises" />
        <div className="exercises">
          <ListExercises />
          <StatsListExercises
            stats={stats}
            dateState={[date, setDate]}
            areaState={[area, setArea]}
            path="exercises"
            className="stats-list-exercises"
          />
        </div>
      </Page>
    </ActivityProvider>
  );
};

export default Exercises;
