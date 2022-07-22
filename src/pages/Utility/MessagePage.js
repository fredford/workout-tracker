import React from "react";
import Page from "../../components/Misc/Page";
import Card from "../../components/Cards/Card";
import { useParams } from "react-router-dom";

import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import Button from "../../components/Buttons/Button";

const MessagePage = () => {
  let { message } = useParams();

  return (
    <Page>
      <Page.NavBar />
      <Page.Body center>
        <Card>
          <Card.Body>
            <div className="d-flex flex-column align-items-center">
              <Card.Text>{messageHandler[message].message}</Card.Text>
              <div className="mt-2 mb-3">{messageHandler[message].icon}</div>
              <Button className="w-100" path={messageHandler[message].button}>
                <Button.Text>Continue</Button.Text>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Page.Body>
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
    button: "/startup",
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
  exercisedeletesuccess: {
    message: "Your exercise has been successfully deleted!",
    button: "/exercises",
    icon: <BsFillCheckCircleFill color="green" size="2rem" />,
  },
  exercisedeletefailed: {
    message: "Your exercise has not been deleted!",
    button: "/exercises",
    icon: <BsFillXCircleFill color="red" size="2rem" />,
  },
};
