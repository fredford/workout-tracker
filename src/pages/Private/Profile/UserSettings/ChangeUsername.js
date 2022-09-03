// Library imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiUserSettingsLine } from "react-icons/ri";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import IconCard from "../../../../components/Cards/IconCard";
import Form from "../../../../components/Forms/Form";

// Redux import
import { updateUser } from "../../../../redux/reducers/user";

/**
 * Component that allows a user to change their username
 *
 * Status: complete
 */
const ChangeUsername = () => {
  // React hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve user object from the store
  const user = useSelector((state) => state.user);

  // State variable for the new username
  const [name, setName] = useState("");

  // Function to update the input username
  const updateName = (e) => {
    setName(e);
  };

  // If no username is provided, prevent updating the name
  var isDisabled = name.length ? false : true;

  // Function to update the Redux store and make a PUT request
  // to the server updating the username
  const handleUpdateName = async () => {
    var newUser = { ...user };

    newUser.name = name;

    try {
      await dispatch(updateUser(newUser));
      navigate("/message/usernamesuccess");
    } catch (err) {
      navigate("/message/usernamefailure");
      console.log(err);
    }
  };

  return (
    <IconCard
      className="h-100"
      Icon={RiUserSettingsLine}
      title="Username"
      subtitle="Set your new username"
    >
      <div className="profile-settings__form-container">
        <Form className="mb-3 w-100">
          <Form.Label>New Username</Form.Label>
          <Form.Input
            type="text"
            id="name"
            placeholder={user.name}
            value={name}
            onChange={updateName}
            autoComplete="off"
            required
          ></Form.Input>
        </Form>

        <Button className="w-100" onClick={handleUpdateName} disabled={isDisabled}>
          Update
        </Button>
      </div>
    </IconCard>
  );
};

export default ChangeUsername;
