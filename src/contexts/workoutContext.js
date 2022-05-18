import React from "react";

const WorkoutContext = React.createContext();

const WorkoutProvider = (props) => {
  const [sets, setSets] = React.useState([]);
  const [workout, setWorkout] = React.useState({
    date: "...",
    type: "...",
  });

  return (
    <WorkoutContext.Provider
      value={{
        sets: [sets, setSets],
        workout: [workout, setWorkout],
      }}
    >
      {props.children}
    </WorkoutContext.Provider>
  );
};

export { WorkoutContext, WorkoutProvider };
