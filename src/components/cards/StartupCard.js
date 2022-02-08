import React from "react";

export default function StartupCard(props) {
  return (
    <div className="login-page" id="login-image">
      <div className="login-card">
        <h3>Workout Tracker</h3>
        <hr />
        <h4>{props.title}</h4>
        <div className="login-page__form">{props.children}</div>
      </div>
    </div>
  );
}
