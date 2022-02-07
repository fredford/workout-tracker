import React from "react";
import { Card, Form } from "react-bootstrap";

export default function Login() {
  return (
    <div className="login-page" id="login-image">
      <Card>
        <Card.Body>
          <h3>Login</h3>
          <div className="login-page__form">
            <label>Username</label>
            <input placeholder="Enter username"></input>
            <label>Password</label>
            <input placeholder="Enter password"></input>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
