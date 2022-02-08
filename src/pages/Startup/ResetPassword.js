import React from "react";
import StartupCard from "../../components/cards/StartupCard";

export default function ResetPassword() {
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  var errorMessage = "";

  const attemptReset = () => {};
  return (
    <StartupCard title="Reset Password">
      <label>New Password</label>
      <input
        type="password"
        placeholder="Enter new password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <label>Confirm New Password</label>
      <input
        type="password"
        placeholder="Confirm new password"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        value={passwordConfirm}
      />
      <button id="login-button" onClick={attemptReset}>
        Reset Password
      </button>
      <p>{errorMessage}</p>
    </StartupCard>
  );
}
