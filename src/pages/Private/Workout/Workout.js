import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../../../components/Misc/Page";
import { resolve } from "../../../services/utils";
import WorkoutsService from "../../../services/workouts";

const Workout = () => {
  const { workoutId } = useParams();
  const [date, setDate] = useState("");

  const [workout, setWorkout] = useState({
    date: "...",
    type: "...",
  });

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const [data, error] = await resolve(WorkoutsService.getById(workoutId));
    setWorkout(data[0]);
    let tempDate = new Date(data[0].date);
    setDate(tempDate.toDateString());
  };

  return (
    <Page>
      <Page.NavBar />
      <Page.Header>{date}</Page.Header>
      <Page.Body className="navbar-page container"></Page.Body>
    </Page>
  );
};

export default Workout;
