import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

const ChangeUsername = () => {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");

  console.log(username);
  const updateUsername = (e) => {
    setUsername(e);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  var isDisabled = true;

  if (username.length) {
    isDisabled = false;
  }

  const handleUpdateUsername = () => {
    // TODO update the username in the database
  };

  return (
    <Card className="card-padding h-100">
      <Card.ImageHeader path="./scale.png">
        <Card.Title>Change Username</Card.Title>
        <Card.Text className="text-muted">Set your new username</Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
          <Form className="mb-3">
            <Form.Input
              type="text"
              id="username"
              placeholder={user.name}
              value={username}
              onChange={updateUsername}
              autoComplete="off"
              required
            ></Form.Input>
          </Form>

          <Button
            className="w-100"
            onClick={handleUpdateUsername}
            disabled={isDisabled}
          >
            <Button.Text>Update</Button.Text>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChangeUsername;
