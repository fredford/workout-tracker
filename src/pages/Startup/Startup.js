import React from "react";

import { Link } from "react-router-dom";
import StartupCard from "../../components/cards/StartupCard";

export default function Startup() {
  return (
    <StartupCard title="Welcome">
      <Link to="/login">
        <button className="btn btn-primary w-100 mb-3">Login</button>
      </Link>
      <Link to="/register">
        <button className="btn btn-primary w-100">Register</button>
      </Link>
    </StartupCard>
  );
}
