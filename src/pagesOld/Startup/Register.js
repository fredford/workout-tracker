import React, { useState, useEffect } from "react";
import StartupCard from "../../components/cards/StartupCard";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  const attemptRegister = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== passwordConfirm) {
      setPassword("");
      setPasswordConfirm("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/v1/register",
        {
          name,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <StartupCard title="Register">
      <form onSubmit={attemptRegister} className="login-page__form">
        <label>Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        <label>Email</label>
        <input
          type="email"
          required
          id="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          id="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          id="confirmPassword"
          placeholder="Confirm password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <p>{error}</p>

        <button id="login-button" type="submit">
          Register
        </button>
        <hr />
        <p>
          Already registered? <Link to={{ pathname: "/login" }}> Sign in</Link>
        </p>
      </form>
    </StartupCard>
  );
}
