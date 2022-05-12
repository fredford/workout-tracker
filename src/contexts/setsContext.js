import React from "react";

const SetsContext = React.createContext();

const SetsProvider = (props) => {
  const [sets, setSets] = React.useState([]);

  return (
    <SetsContext.Provider value={[sets, setSets]}>
      {props.children}
    </SetsContext.Provider>
  );
};

export { SetsContext, SetsProvider };
