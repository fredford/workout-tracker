// Library imports
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// Local component imports
import Page from "../../../components/Misc/Page";
import SectionExercises from "./sections/SectionExercises";
// Contexts
import { ActivityProvider } from "../../../contexts/activityContext";
// Redux reducers
import { fetchExercises } from "../../../redux/reducers/exercises";

/**
 * Page to display Exercises for the User, add new Exercises and see data on individual Exercise's
 *
 * Status: complete
 */
const Exercises = () => {
  // React hooks
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveAllExercises();
  }, []);

  // Retrieve All Exercises using Redux reducer
  const retrieveAllExercises = async () => {
    try {
      dispatch(fetchExercises());
    } catch (error) {
      console.log(`Exercises page, fetch exercises error: ${error}`);
    }
  };

  return (
    <ActivityProvider>
      <Page navbar container>
        <Page.Header header="Exercises" />
        <Page.Body>
          <SectionExercises />
        </Page.Body>
      </Page>
    </ActivityProvider>
  );
};

export default Exercises;
