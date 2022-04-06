import React, { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Page from "../../../components/Misc/Page";
import Card from "../../../components/Cards/Card";
import Form from "../../../components/Forms/Form";
import Button from "../../../components/Buttons/Button";

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const updateEmail = (e) => {
    setEmail(e);
  };

  const updatePassword = (e) => {
    setPassword(e);
  };

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
    <Page>
      <Page.Body className="center-page">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Workout Tracker</Card.Title>
            <Card.Subtitle className="text-center text-muted">
              Login
            </Card.Subtitle>
            <Card.Bar />
            <Form className="mb-2">
              <Form.Label for="login-email">Email</Form.Label>
              <Form.Input
                id="login-email"
                type="email"
                value={email}
                onChange={updateEmail}
              />
            </Form>
            <Form>
              <Form.Label for="login-password">Password</Form.Label>
              <Form.Input
                id="login-password"
                type="password"
                value={password}
                onChange={updatePassword}
              />
            </Form>
            <Card.Text className="text-error">{error}</Card.Text>
            <Button onClick={attemptLogin}>Login</Button>
            <Card.Bar />
            <div className="d-flex justify-content-between">
              <Link className="me-5" to={{ pathname: "/forgotpassword" }}>
                Forgot Password?
              </Link>
              <Link to={{ pathname: "/register" }}>Create an account</Link>
            </div>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Login;
