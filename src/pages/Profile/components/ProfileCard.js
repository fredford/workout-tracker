import React from "react";
import Card from "../../../components/cards/Card";

// This is the layout style for the cards in the Profile page
const ProfileCard = (props) => {
  return (
    <Card title={props.title}>
      <h6 className="text-muted">{props.subtitle}</h6>
      <div className="d-flex justify-content-center mt-3">{props.children}</div>
    </Card>
  );
};

export default ProfileCard;
