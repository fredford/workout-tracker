import React from "react";
import Card from "../../../components/cards/Card";

// This is the layout style for the cards in the Profile page
const ProfileCard = (props) => {
  return (
    <Card>
      <div className="d-flex flex-row align-items-center mb-1">
        <img className="card-icon" src={props.image} alt="" />
        <div className="d-flex flex-column">
          <h4 className="mb-2">{props.title}</h4>
          <h6 className="text-muted">{props.subtitle}</h6>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">{props.children}</div>
    </Card>
  );
};

export default ProfileCard;
