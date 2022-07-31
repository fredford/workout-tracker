// Library imports
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

// Local services imports
import UserService from "../../../../services/user";
import api from "../../../../services/sendRequest";

/**
 * Component for displaying and deleting the User account
 *
 * Status: complete
 */
const DeleteAccount = () => {
  // React hooks
  const navigate = useNavigate();

  // Redux store User
  const user = useSelector((state) => state.user);

  // Component state variables
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");

  // Function for updating the check username in the component
  const updateUsername = (e) => {
    setUsername(e);
  };

  // Functions for handling Modal visibility
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Function for handling the user submitting a DELETE request
  const handleSubmit = async () => {
    await api.request(
      UserService.deleteUser(),
      () => {
        // Request success actions
        localStorage.removeItem("authToken");
        navigate("/message/deletesuccess");
      },
      () => {
        // Request failure actions
        navigate("/message/deletecancel");
      }
    );
  };

  return (
    <>
      <Button border onClick={handleShow}>
        <Button.Image>
          <img className="button-image" src="./delete.png" alt="" />
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
                  disabled={!(username === user.name)}
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
