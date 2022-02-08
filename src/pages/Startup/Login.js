import React from "react";
import { Card, Form } from "react-bootstrap";
import StartupCard from "../../components/cards/StartupCard";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  var errorMessage = "";

  const attemptLogin = () => {};

  return (
    <StartupCard title="Login">
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
      <a href="/forgotpassword">Forgot Password?</a>
      <p>
        Not registered yet? <a href="/register">Create an account</a>
      </p>
    </StartupCard>
  );
}
