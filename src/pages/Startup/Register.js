import React from "react";
import Validator from "email-validator";
import StartupCard from "../../components/cards/StartupCard";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [name, setName] = React.useState("");

  var errorMessage = "";

  const attemptRegister = () => {
    if (!Validator.validate(email)) {
    }
  };

  return (
    <StartupCard title="Register">
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
      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm password"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        value={passwordConfirm}
      />
      <p>{errorMessage}</p>

      <button id="login-button" onClick={attemptRegister}>
        Register
      </button>
      <hr />
      <p>
        Already registered? <a href="/"> Sign in</a>
      </p>
    </StartupCard>
  );
}
