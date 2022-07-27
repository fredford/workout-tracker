import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

import UserService from "../../../../services/user";
import { resolve } from "../../../../services/utils";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");

  const updateUsername = (e) => {
    setUsername(e);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  var isDisabled = true;

  if (username === user.name) {
    isDisabled = false;
  }

  const handleSubmit = async () => {
    const [data, error] = await resolve(UserService.deleteUser());

    if (data) {
      localStorage.removeItem("authToken");
      navigate("/message/deletesuccess");
    } else {
      navigate("/message/deletecancel");
    }
  };

  return (
    <>
      <Button border onClick={handleShow}>
        <Button.Image>
          <img className="button-image" src="./delete.png" />
        </Button.Image>
        <Button.Text>Delete Account</Button.Text>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Card>
          <Card.Body>
            <Card.Title>Delete Account</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Enter your username to delete account
            </Card.Subtitle>
            <Form className="mb-3">
              <Form.Label>
                Your username is: <span className="fw-bold"> {user.name}</span>
              </Form.Label>
              <Form.Input
                type="text"
                id="username"
                placeholder={user.name}
                value={username}
                onChange={updateUsername}
                autoComplete={"off"}
                required
              ></Form.Input>
            </Form>
            <div className="row">
              <div className="col">
                <Button
                  onClick={handleSubmit}
                  disabled={isDisabled}
                  className="w-100"
                  accent
                  border
                >
                  <Button.Text>Delete</Button.Text>
                </Button>
              </div>
              <div className="col">
                <Button border onClick={handleClose} className="w-100">
                  <Button.Text>Cancel</Button.Text>
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Modal>
    </>
  );
};

export default DeleteAccount;
