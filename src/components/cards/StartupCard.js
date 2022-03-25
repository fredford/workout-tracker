import React from "react";
import Card from "./Card";

export default function StartupCard(props) {
  return (
    <div className="container mt-3">
      <Card>
        <div className="card-body">
          <div className="card-title">Workout Tracker</div>
          <div className="card-subtitle text-muted">{props.title}</div>
          <hr />
          {props.children}
        </div>
      </Card>
    </div>
  );
}
