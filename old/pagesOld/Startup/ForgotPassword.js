import React from "react";

import StartupCard from "../../components/cards/StartupCard";

export default function ForgotPassword() {
  const [email, setEmail] = React.useState("");

  var errorMessage = "";

  const attemptEmail = () => {};

  return (
    <StartupCard title="Forgot Password">
      <form onSubmit={attemptEmail} className="login-page__form">
        <p style={{ textAlign: "center" }}>
          Please enter the email address registered to your account to reset
          password!
        </p>
        <label>Email</label>
        <input
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <button id="login-button" type="submit">
          Send Email
        </button>
        <p>{errorMessage}</p>
      </form>
    </StartupCard>
  );
}
