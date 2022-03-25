import React from "react";
import Card from "../../../components/cards/Card";
import { useNavigate } from "react-router-dom";

// This is the layout style for the cards in the Profile page
const ProfileCard = (props) => {
  var className = "p-3 " + props.className;

  const navigate = useNavigate();

  return (
    <Card className={className}>
      <div className="profile-card" onClick={() => navigate(props.path)}>
        <img className="profile-card__image" src={props.image} alt="" />

        <h4 className="mb-2">{props.title}</h4>
        <h6 className="text-muted">{props.subtitle}</h6>
      </div>

      {props.children ? (
        <div className="d-flex justify-content-center mt-3">
          {props.children}
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ProfileCard;
