// Library imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

// Local component imports
import Card from "../../../../components/Cards/Card";
import StatsCard from "../../../../components/Stats/StatsCard";
import WorkoutsService from "../../../../services/workouts";

// Utilities
import useApi from "../../../../services/useApi";
import Button from "../../../../components/Buttons/Button";

/**
 * Component that retrieves the Last Workout performed
 *
 * Status: complete
 */
const LastWorkout = () => {
  // React hooks
  const navigate = useNavigate();

  // Component State
  const [link, setLink] = useState("/workouts");
  const [lastWorkout, setLastWorkout] = useState({
    id: "123456",
    type: "Progressive",
    sets: 0,
    totalRepetitions: 0,
  });

  // API GET call for the Last Workout
  const { data, error } = useApi(WorkoutsService.getLast);

  // Handle data retrieved for the component state
  useEffect(() => {
    // Set the data for the last workout
    if (data) {
      setLastWorkout(data);
      setLink(`/workouts/${data.id}`);
    }
  }, [data]);

  // If no workout is found allow the user to start a new workout instead
  if (error) {
    return (
      <Card onClick={() => navigate(link)}>
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center h-100">
            <h3>Start Workout</h3>
          </div>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card>
        <Card.Header>Last Workout</Card.Header>
        <Card.Subtitle>{lastWorkout.type}</Card.Subtitle>
        <Card.Body className="dashboard__last-workout-items">
          <StatsCard
            className="item"
            data={lastWorkout.sets}
            title="Sets"
            subtitle="Count"
          />
          <StatsCard
            className="item"
            data={lastWorkout.totalRepetitions}
            title="Total"
            subtitle="Repetitions"
          />
          <Button className="item" border onClick={() => navigate(link)}>
            <Button.Icon>
              <RiArrowGoBackFill />
            </Button.Icon>
            <Button.Text>Open</Button.Text>
          </Button>
        </Card.Body>
      </Card>
    );
  }
};

export default LastWorkout;
