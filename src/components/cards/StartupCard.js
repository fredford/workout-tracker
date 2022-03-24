import React from "react";

export default function StartupCard(props) {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <div className="card-title">Workout Tracker</div>
          <div className="card-subtitle text-muted">{props.title}</div>
          <hr />
          {props.children}
        </div>
      </div>
    </div>
  );
}
