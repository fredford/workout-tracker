// Library imports
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import BasicCard from "../../../../components/Cards/BasicCard";
import Form from "../../../../components/Forms/Form";

// Local services imports
import services from "../../../../services/services";

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
    await services.user.deleteUser(
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
      <Button src="./delete.png" alt="Delete" onClick={handleShow}>
        Delete Account
      </Button>
      <Modal show={show} onHide={handleClose}>
        <BasicCard title="Delete Account" subtitle="Enter your username to delete account">
          <div>
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
            <div className="d-flex flex-row large-gap">
              <Button fill onClick={handleSubmit} disabled={!(username === user.name)}>
                Delete
              </Button>
              <Button fill onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </BasicCard>
      </Modal>
    </>
  );
};

export default DeleteAccount;
