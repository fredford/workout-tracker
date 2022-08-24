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
import StatsBarChart from "../../../components/Stats/StatsBarChart";
import Card from "../../../components/Cards/Card";

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
  const [repsStats, setRepsStats] = useState({});

  useEffect(() => {
    retrieveAllExercises();
    retrieveAllStats();
  }, [date, area]);

  // Retrieve All Exercises using Redux reducer
  const retrieveAllExercises = async () => {
    try {
      dispatch(fetchExercises());
      await services.stats.getRepsByAreaStats(setRepsStats);
    } catch (error) {
      console.log(`Exercises page, fetch exercises error: ${error}`);
    }
  };

  const retrieveAllStats = async () => {
    await services.stats.getTopExercises(area, date, "all", setStats);
  };

  // Get the CSS property value for the faded accent color of the application
  let fadedColor = getComputedStyle(document.body).getPropertyValue("--background-acce");
  // Get the CSS property value for the primary accent color of the application
  let primaryColor = getComputedStyle(document.body).getPropertyValue("--foreground-acce");

  let chartData = {
    labels: Object.keys(repsStats),
    datasets: [
      {
        lineTension: 0.5,
        label: "Workout",
        data: Object.values(repsStats),
        backgroundColor: fadedColor,
        borderColor: primaryColor,
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  console.log(repsStats);

  return (
    <ActivityProvider>
      <Page navbar container>
        <PageHeader header="Exercises" />
        <div className="exercises-row">
          <div className="stretch-card">
            <ListExercises />
          </div>
          <div className="stretch-card">
            <div className="exercises-col">
              <div className="stretch-card">
                <StatsListExercises
                  stats={stats}
                  dateState={[date, setDate]}
                  areaState={[area, setArea]}
                  path="exercises"
                  className="stats-list-exercises w-100"
                  type="exercises"
                />
              </div>
              <div className="stretch-card">
                <Card className="w-100">
                  <Card.Header>Repetitions by Area</Card.Header>
                  <Card.Body className="mt-3">
                    <StatsBarChart data={chartData} options={"standard"} show={repsStats !== {}} />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </ActivityProvider>
  );
};

export default Exercises;
