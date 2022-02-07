import React from "react";
import { Card } from "react-bootstrap";

import Validator from "email-validator";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  var errorMessage = "";

  const attemptRegister = () => {
    if (!Validator.validate(email)) {
    }
  };

  return (
    <div className="login-page" id="login-image">
      <Card>
        <Card.Body>
          <h3>Workout Tracker</h3>
          <hr />
          <h4>Register</h4>
          <div className="login-page__form">
            <label>Name</label>
            <input
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label>Email</label>
            <input
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p>{errorMessage}</p>

            <button id="login-button" onClick={attemptRegister}>
              Register
            </button>
            <hr />
            <p>
              Already registered? <a href="/"> Sign in</a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
