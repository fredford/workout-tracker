// Library imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

// Local component imports
import Card from "../../../../components/Cards/Card";
import StatsCard from "../../../../components/Stats/StatsCard";
import WorkoutsService from "../../../../services/workouts";

// Utilities
import Button from "../../../../components/Buttons/Button";
import api from "../../../../services/sendRequest";

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
  const [showLast, setShowLast] = useState(false);

  // Handle data retrieved for the component state
  useEffect(() => {
    // API GET request to retrieve the last workout started by the User
    api.fetch(WorkoutsService.getLast(), (data) => {
      setLastWorkout(data);
      setLink(`/workouts/${data.id}`);
      setShowLast(true);
    });
  }, []);

  // If no workout is found allow the user to start a new workout instead
  if (!showLast) {
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
