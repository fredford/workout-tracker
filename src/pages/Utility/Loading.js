// Library imports
import React from "react";

/**
 * Component to show a loading icon
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: completed
 */
const Loading = React.memo(() => {
  return (
    <div className="loading-container">
      <span className="loading-main">
        <span className="loading-inner"></span>
      </span>
    </div>
  );
});

export default Loading;
