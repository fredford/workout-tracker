import React from "react";
import { Card } from "react-bootstrap";
import { ActivityContext } from "../../contexts/activityContext";

export default function SectionsCard(props) {
  const activities = React.useContext(ActivityContext);
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
    <Card.Title className="sections-card__title">
      {props.name}
      <div className="sections-card__button-group">
        <input
          id="button-upper"
          type="checkbox"
          onChange={buttonChange}
          checked={upper}
        />

        <input
          id="button-lower"
          type="checkbox"
          onChange={buttonChange}
          checked={lower}
        />

        <input
          id="button-core"
          type="checkbox"
          onChange={buttonChange}
          checked={core}
        />

        <input
          id="button-cardio"
          type="checkbox"
          onChange={buttonChange}
          checked={cardio}
        />
        <label id="label-upper" htmlFor="button-upper">
          Upper
        </label>
        <label id="label-lower" htmlFor="button-lower">
          Lower
        </label>
        <label id="label-core" htmlFor="button-core">
          Core
        </label>
        <label id="label-cardio" htmlFor="button-cardio">
          Cardio
        </label>
      </div>
    </Card.Title>
  );
}
