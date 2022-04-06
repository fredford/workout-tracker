import React from "react";
import Page from "./Page";
import Card from "../../components/cards/Card";
import { useNavigate, useParams } from "react-router-dom";

import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

const MessagePage = () => {
  const navigate = useNavigate();

  let { message } = useParams();

  return (
    <Page>
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Card className="d-flex flex-column align-items-center">
          <p>{messageHandler[message].message}</p>
          <div className="mt-2 mb-2">{messageHandler[message].icon}</div>
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => navigate(messageHandler[message].button)}
          >
            Continue
          </button>
        </Card>
      </div>
    </Page>
  );
};

export default MessagePage;

const messageHandler = {
  usernamesuccess: {
    message: "Your username was successfully changed!",
    button: "/profile",
    icon: <BsFillCheckCircleFill color="green" size="2rem" />,
  },
  usernamecancel: {
    message: "Your username was not changed!",
    button: "/profile",
    icon: <BsFillXCircleFill color="red" size="2rem" />,
  },
  passwordsuccess: {
    message: "Your password was successfully changed!",
    button: "/profile",
    icon: <BsFillCheckCircleFill color="green" size="2rem" />,
  },
  passwordcancel: {
    message: "Your password was not changed!",
    button: "/profile",
    icon: <BsFillXCircleFill color="red" size="2rem" />,
  },
  deletesuccess: {
    message: "Your account has been deleted, sorry to see you go!",
    button: "/",
    icon: <BsFillCheckCircleFill color="green" size="2rem" />,
  },
  deletecancel: {
    message: "Your account was not deleted!",
    button: "/profile",
    icon: <BsFillXCircleFill color="red" size="2rem" />,
  },
  exerciseadded: {
    message: "Your exercise has been successfully added!",
    button: "/exercises",
    icon: <BsFillCheckCircleFill color="green" size="2rem" />,
  },
  exercisefailed: {
    message: "Your exercise has not been added!",
    button: "/exercises",
    icon: <BsFillXCircleFill color="red" size="2rem" />,
  },
};
