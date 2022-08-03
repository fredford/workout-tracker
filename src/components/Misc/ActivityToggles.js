import React, { useContext } from "react";
import { ActivityContext } from "../../contexts/activityContext";

import ButtonToggle from "../Buttons/ButtonToggle";

/**
 * Component set to handle activity toggles for an activity context
 * @returns {JSX.Element}
 * @constructor
 */
export default function ActivityToggles() {

  // Acquire context state
  const activities = useContext(ActivityContext);
  const [upper, setUpper] = activities.upper;
  const [lower, setLower] = activities.lower;
  const [core, setCore] = activities.core;
  const [cardio, setCardio] = activities.cardio;

  // Button handler to update the visibility of each toggle
  const buttonChange = (e) => {
    switch (e.target.id) {
      case "button-upper":
        setUpper(!upper);
        break;
      case "button-lower":
        setLower(!lower);
        break;
      case "button-core":
        setCore(!core);
        break;
      case "button-cardio":
        setCardio(!cardio);
        break;
      default:
        console.log("Error setting Sections Card button");
    }
  };

  return (
    <div className="mb-3">
      <h4 className="activity__button-title">Activity Type</h4>
      <div className="activity__button-group">
        <div className="d-flex flex-column align-items-center container">
          <ButtonToggle
            id="button-upper"
            checked={upper}
            onChange={buttonChange}
            className="w-100"
          >
            <img className="activity__button-image" src="./upper.png" alt="" />
          </ButtonToggle>
          <p>Upper</p>
        </div>
        <div className="d-flex flex-column align-items-center container">
          <ButtonToggle
            id="button-lower"
            checked={lower}
            onChange={buttonChange}
            className="w-100"
          >
            <img className="activity__button-image" src="./lower.png" alt="" />
          </ButtonToggle>
          <p>Lower</p>
        </div>
        <div className="d-flex flex-column align-items-center container">
          <ButtonToggle
            id="button-core"
            checked={core}
            onChange={buttonChange}
            className="w-100"
          >
            <img className="activity__button-image" src="./core.png" alt="" />
          </ButtonToggle>
          <p>Core</p>
        </div>
        <div className="d-flex flex-column align-items-center container">
          <ButtonToggle
            id="button-cardio"
            checked={cardio}
            onChange={buttonChange}
            className="w-100"
          >
            <img className="activity__button-image" src="./cardio.png" alt="" />
          </ButtonToggle>
          <p>Cardio</p>
        </div>
      </div>
    </div>
  );
}
