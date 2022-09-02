// Library imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

// Local component imports
import Card from "../../../../components/Cards/Card";
import CardStats from "../../../../components/Cards/CardStats";
import BasicCard from "../../../../components/Cards/BasicCard";

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
      <BasicCard title="Last Workout" subtitle={lastWorkout.type} className="w-100 h-100">
        <div className="section-quick-last__items">
          <CardStats data={lastWorkout.sets} title="Sets" />
          <CardStats data={lastWorkout.totalRepetitions} title="Repetitions" />
          <Button className="small-size" onClick={() => navigate(link)}>
            Open
          </Button>
        </div>
      </BasicCard>
    );
  }
};

export default LastWorkout;
