import React from "react";

import { useSelector } from "react-redux";

/**
 * Component that displays a greeting to the username provided
 *
 * Status: complete
 */
const Intro = ({ currHr }) => {
  // Retrieve the store state for the User
  const user = useSelector((state) => state.user);

  // Set the default greeting time frame
  var outputMessage = "Good evening";

  // If the hour is before 12 (noon) respond good morning
  if (currHr < 12) {
    outputMessage = "Good morning";
  }
  // If the hour is before 18 or 6pm respond good afternoon
  else if (currHr < 18) {
    outputMessage = "Good afternoon";
  }

  return (
    <div className="dashboard-intro">
      <h1>
        {outputMessage}, {user.name}!
      </h1>
    </div>
  );
};

export default React.memo(Intro);
