import React, { useContext } from "react";
import { ActivityContext } from "../../contexts/activityContext";

import Button from "../Buttons/Button";

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
  const buttonChange = (id) => {
    switch (id) {
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

  const types = {
    Upper: {
      id: "button-upper",
      checked: upper,
      src: "./upper.png",
      alt: "Upper",
    },
    Lower: {
      id: "button-lower",
      checked: lower,
      src: "./lower.png",
      alt: "Lower",
    },
    Core: {
      id: "button-core",
      checked: core,
      src: "./core.png",
      alt: "Core",
    },
    Cardio: {
      id: "button-cardio",
      checked: cardio,
      src: "./cardio.png",
      alt: "Cardio",
    },
  };

  return (
    <div className="mb-3">
      <h4 className="activity__button-title">Activity Type</h4>
      <div className="activity__button-group large-gap">
        {Object.keys(types).map((type) => {
          return (
            <Button
              key={type}
              id={types[type].id}
              active={types[type].checked}
              onChange={buttonChange}
              src={types[type].src}
              alt={types[type].alt}
              fill
            >
              {type}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
