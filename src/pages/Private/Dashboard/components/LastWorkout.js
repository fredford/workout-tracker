// Library imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

// Local component imports
import Card from "../../../../components/Cards/Card";
import CardStats from "../../../../components/Cards/CardStats";

// Utilities
import Button from "../../../../components/Buttons/Button";
import services from "../../../../services/services";

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
    const retrieveData = async () => {
      await services.workouts.getLast((data) => {
        setLastWorkout(data);
        setLink(`/workouts/${data.id}`);
        setShowLast(true);
      });
    };
    retrieveData();
  }, []);

  // If no workout is found allow the user to start a new workout instead
  if (!showLast) {
    return (
      <Button className="w-100" onClick={() => navigate(link)}>
        Start Workout
      </Button>
    );
  } else {
    return (
      <Card className="w-100">
        <Card.Header>Last Workout</Card.Header>
        <Card.Subtitle>{lastWorkout.type}</Card.Subtitle>
        <Card.Body className="section-quick-last__items">
          <CardStats data={lastWorkout.sets} title="Sets" subtitle="Count" />
          <CardStats data={lastWorkout.totalRepetitions} title="Total" subtitle="Repetitions" />
          <Button Icon={RiArrowGoBackFill} iconSize={25} onClick={() => navigate(link)}>
            Open
          </Button>
        </Card.Body>
      </Card>
    );
  }
};

export default LastWorkout;
