import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Page from "../../../components/Misc/Page";
import Card from "../../../components/Cards/Card";
import Form from "../../../components/Forms/Form";
import Button from "../../../components/Buttons/Button";

const Register = () => {
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

  const items = [
    {
      label: "Name",
      type: "text",
      placeholder: "John Smith",
      onChange: setName,
      required: true,
      value: name,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "email@mail.com",
      onChange: setEmail,
      required: true,
      value: email,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "******",
      onChange: setPassword,
      required: true,
      value: password,
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "******",
      onChange: setPasswordConfirm,
      required: true,
      value: passwordConfirm,
    },
  ];

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
    <Page>
      <Page.Body className="center-page">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Workout Tracker</Card.Title>
            <Card.Subtitle className="text-center text-muted">
              Register
            </Card.Subtitle>
            <Card.Bar />

            {items.map((item, index) => {
              return (
                <Form key={index} className="mb-3">
                  <Form.Label>{item.label}</Form.Label>
                  <Form.Input
                    type={item.type}
                    placeholder={item.placeholder}
                    onChange={item.onChange}
                    value={item.value}
                    autoComplete="off"
                    required={item.required}
                  />
                </Form>
              );
            })}
            <Card.Text className="text-error">{error}</Card.Text>
            <Button onClick={attemptRegister}>Register</Button>
            <Card.Bar />

            <p>
              Already registered?{" "}
              <Link to={{ pathname: "/login" }}> Sign in</Link>
            </p>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Register;
