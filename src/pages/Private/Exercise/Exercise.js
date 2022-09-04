// Library imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Local component imports
import BasicCard from "../../../components/Cards/BasicCard";
import Page from "../../../components/Layout/Page/Page";
import ExerciseInfo from "./sections/ExerciseInfo";
import Button from "../../../components/Buttons/Button";
import ChallengesCard from "./components/ChallengesCard";
import CardChart from "../../../components/Cards/CardChart";
// API Services
import services from "../../../services/services";

/**
 * Page to display information and statistics on a given Exercise
 *
 * Status: in-progress
 *
 * Future:
 * - TODO add functionality to adding Challenges
 */
const Exercise = () => {
  // React hooks
  const navigate = useNavigate();
  // Get the exerciseId of the exercise shown from the parameters
  let { exerciseId } = useParams();

  // Component state background data if none is found
  const [exerciseStats, setExerciseStats] = useState({
    stats: {
      Total: "-",
      Avg: "-",
      Max: "-",
    },
    cumulative: {
      "2022-6-21": 40,
      "2022-6-22": 60,
      "2022-6-24": 90,
    },
    workoutProgression: {
      "2022-6-21": 40,
      "2022-6-22": 20,
      "2022-6-24": 30,
    },
    setProgression: {
      "2022-6-21 Set 1": 15,
      "2022-6-21 Set 2": 25,
      "2022-6-22 Set 1": 20,
      "2022-6-22 Set 2": 30,
      "2022-6-24 Set 1": 20,
      "2022-6-24 Set 2": 35,
    },
  });
  // Boolean to remove chart overlays
  const [showStats, setShowStats] = useState(false);
  // Component state for exercise object
  const [exercise, setExercise] = useState({});

  useEffect(() => {
    // Retrieve the stats for the Exercise
    const retrieveData = async () => {
      await services.stats.getExerciseData(exerciseId, (data) => {
        setExerciseStats(data);
        setShowStats(true);
      });
    };
    // Retrieve the Exercise information
    const retrieveExercise = async () => {
      await services.exercises.getById(exerciseId, setExercise);
    };
    retrieveExercise();
    retrieveData();
  }, [exerciseId]);

  // Function to handle deleting the Exercise
  const deleteExercise = async () => {
    await services.exercises.deleteExercise(
      exerciseId,
      () => {
        navigate("/message/exercisedeletesuccess");
      },
      () => {
        navigate("/message/exercisedeletefailed");
      }
    );
  };

  return (
    <Page navbar>
      <Button fill path="/exercises">
        Back to Exercises
      </Button>

      <div className="mt-3">
        <ExerciseInfo exercise={exercise} stats={exerciseStats.stats} />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
          <CardChart
            header="Cumulative Repetitions"
            stats={exerciseStats.cumulative}
            showStats={showStats}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
          <CardChart
            header="Set Progression"
            stats={exerciseStats.setProgression}
            showStats={showStats}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
          <CardChart
            header="Workout Progression"
            stats={exerciseStats.workoutProgression}
            showStats={showStats}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
          <ChallengesCard />
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
          <BasicCard title="Settings">
            <Button fill onClick={deleteExercise} danger>
              Delete
            </Button>
          </BasicCard>
        </div>
      </div>
    </Page>
  );
};

export default Exercise;
