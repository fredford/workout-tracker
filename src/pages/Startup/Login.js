import React, { useState, useEffect } from "react";

import StartupCard from "../../components/cards/StartupCard";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/private");
    }
  }, [navigate]);

  const attemptLogin = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/v1/login",
        {
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <StartupCard title="Login">
      <form onSubmit={attemptLogin} className="standard-form">
        <div className="standard-form__item">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="standard-form__item">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="standard-button btn-primary w-100" type="submit">
          Login
        </button>
        <p>{error}</p>
        <hr />
        <div className="d-flex justify-content-between">
          <Link to={{ pathname: "/forgotpassword" }}>Forgot Password?</Link>
          <p>
            Not registered yet?{" "}
            <Link to={{ pathname: "/register" }}>Create an account</Link>
          </p>
        </div>
      </form>
    </StartupCard>
  );
};

export default Login;
