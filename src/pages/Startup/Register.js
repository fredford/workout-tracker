import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import StartupCard from "../../components/cards/StartupCard";
import Page from "../../components/utility/Page";

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

  const items = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter name",
      onChange: (e) => setName(e.target.value),
      required: true,
      value: name,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter email",
      onChange: (e) => setEmail(e.target.value),
      required: true,
      value: email,
    },
    {
      label: "Password",
      type: "password",
      placeholder: " Enter Password",
      onChange: (e) => setPassword(e.target.value),
      required: true,
      value: password,
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter Confirm Password",
      onChange: (e) => setPasswordConfirm(e.target.value),
      required: true,
      value: passwordConfirm,
    },
  ];

  return (
    <Page>
      <Page.Body className="center-page">
        <StartupCard title="Register">
          <form onSubmit={attemptRegister} className="login-page__form">
            {items.map((item, index) => {
              return (
                <div key={index} className="mb-3">
                  <label className="form-label">{item.label}</label>
                  <input
                    className="form-control"
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={item.onChange}
                    required={item.required}
                    value={item.value}
                  />
                </div>
              );
            })}

            <p>{error}</p>

            <button className="btn btn-primary w-100" type="submit">
              Register
            </button>
            <hr />
            <p>
              Already registered?{" "}
              <Link to={{ pathname: "/login" }}> Sign in</Link>
            </p>
          </form>
        </StartupCard>
      </Page.Body>
    </Page>
  );
}
