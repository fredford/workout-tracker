// Library imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiLockPasswordLine } from "react-icons/ri";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import IconCard from "../../../../components/Cards/IconCard";
import Form from "../../../../components/Forms/Form";

// Redux import
import { updateUser } from "../../../../redux/reducers/user";

// Utilities
import { passwordCompare } from "../../../../utilities/utils";

/**
 * Component that allows a user to change their password
 *
 * Status: complete
 */
const ChangePassword = () => {
  // React hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Component state variables
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Redux store user object
  const user = useSelector((state) => state.user);

  // Function for updating the state for password
  const updatePassword = (e) => {
    setPassword(e);
  };

  // Function for updating the state for confirm password
  const updateConfirmPassword = (e) => {
    setConfirmPassword(e);
  };

  // Password comparison function
  const isMatch = passwordCompare(password, confirmPassword);

  // Function to update the Redux store and make a PUT request
  // to the server updating the password
  const handleUpdatePassword = async () => {
    var newUser = { ...user };

    newUser.password = password;

    try {
      await dispatch(updateUser(newUser));
      navigate("/message/passwordsuccess");
    } catch (err) {
      navigate("/message/passwordfailure");
      console.log(err);
    }
  };

  return (
    <IconCard
      className="card-padding h-100"
      Icon={RiLockPasswordLine}
      title="Password"
      subtitle="Set your new password (min. 6 characters)"
    >
      <div className="profile-settings__form-container">
        <Form className="mb-3 button-fill">
          <Form.Label>New Password</Form.Label>
          <Form.Input
            type="password"
            id="password"
            placeholder="******"
            value={password}
            onChange={updatePassword}
            autoComplete="false"
            required
          ></Form.Input>
        </Form>
        <Form className="mb-3 button-fill">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Input
            type="password"
            id="newpassword"
            placeholder="******"
            value={confirmPassword}
            onChange={updateConfirmPassword}
            autoComplete="false"
            required
          ></Form.Input>
        </Form>

        <Button onClick={handleUpdatePassword} disabled={!isMatch} className="w-100">
          Update
        </Button>
      </div>
    </IconCard>
  );
};

export default ChangePassword;
