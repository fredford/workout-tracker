import React, { useContext } from "react";
import { ActivityContext } from "../../contexts/activityContext";

export default function ActivityToggles() {
  const activities = useContext(ActivityContext);
  const [upper, setUpper] = activities.upper;
  const [lower, setLower] = activities.lower;
  const [core, setCore] = activities.core;
  const [cardio, setCardio] = activities.cardio;

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
      <h4 className="text-center mb-2">Activity Type</h4>
      <div className="activity__button-group">
        <div className="d-flex flex-column align-items-center container">
          <input
            id="button-upper"
            type="checkbox"
            onChange={buttonChange}
            checked={upper}
          />
          <label id="label-upper" htmlFor="button-upper">
            <img className="activity__button-image" src="./upper.png" alt="" />
          </label>
          <p>Upper</p>
        </div>
        <div className="d-flex flex-column align-items-center container">
          <input
            id="button-lower"
            type="checkbox"
            onChange={buttonChange}
            checked={lower}
          />
          <label id="label-lower" htmlFor="button-lower">
            <img className="activity__button-image" src="./lower.png" alt="" />
          </label>
          <p>Lower</p>
        </div>
        <div className="d-flex flex-column align-items-center container">
          <input
            id="button-core"
            type="checkbox"
            onChange={buttonChange}
            checked={core}
          />
          <label id="label-core" htmlFor="button-core">
            <img className="activity__button-image" src="./core.png" alt="" />
          </label>
          <p>Core</p>
        </div>
        <div className="d-flex flex-column align-items-center container">
          <input
            id="button-cardio"
            type="checkbox"
            onChange={buttonChange}
            checked={cardio}
          />
          <label id="label-cardio" htmlFor="button-cardio">
            <img className="activity__button-image" src="./cardio.png" alt="" />
          </label>
          <p>Cardio</p>
        </div>
      </div>
    </div>
  );
}
