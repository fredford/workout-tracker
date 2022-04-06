import React from "react";
import { Link } from "react-router-dom";
import StartupCard from "../../components/cards/StartupCard";

export default function Startup() {
  return (
    <StartupCard>
      <Link to="/login">
        <button id="login-button" className="w-100">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button id="login-button" className="w-100">
          Register
        </button>
      </Link>
    </StartupCard>
  );
}
