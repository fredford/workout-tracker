import React from "react";
import { Card, Form } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  var errorMessage = "";

  const attemptLogin = () => {};

  return (
    <div className="login-page" id="login-image">
      <Card>
        <Card.Body>
          <h3>Workout Tracker</h3>
          <hr />
          <h4>Login</h4>
          <div className="login-page__form">
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
            <button id="login-button" onClick={attemptLogin}>
              Login
            </button>
            <p>{errorMessage}</p>
            <hr />
            <p>
              Not registered yet? <a href="/register">Create an account</a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
