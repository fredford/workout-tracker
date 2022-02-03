import React from "react";

const ActivityContext = React.createContext();

const ActivityProvider = (props) => {
  const [upper, setUpper] = React.useState(false);
  const [lower, setLower] = React.useState(false);
  const [core, setCore] = React.useState(false);
  const [cardio, setCardio] = React.useState(false);

  return (
    <ActivityContext.Provider
      value={{
        upper: [upper, setUpper],
        lower: [lower, setLower],
        core: [core, setCore],
        cardio: [cardio, setCardio],
      }}
    >
      {props.children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityProvider };
