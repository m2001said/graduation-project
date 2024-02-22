import React, { useState } from "react";
import { validate } from "./validationUtils";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signupUser } from "../../../features/auth/authSlice";

const SignUpForm = ({ toggleForm, toggleModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  console.log("====================================");
  console.log(process.env.REACT_APP_BACK_SERVER);

  const handleSignUpClick = () => {
    const validationError = validate(newEmail, newPassword);
    // if (validationError) {
    //   setError(validationError);
    //   return;
    // }
    const resultAction = dispatch(signupUser({ email: newEmail, password: newPassword }));
    if (signupUser.fulfilled.match(resultAction)) {
      navigate("/designs");
      toggleModal();
    } else {
      if (resultAction.payload) {
        setError(resultAction.payload.message);
      } else {
        setError("Failed to sign up. Please try again.");
      }
    }
  };
  return (
    <>
      <h1>Create Account</h1>
      <div className="modal-form">
        <label htmlFor="newEmail">Email</label>
        <input type="email" id="newEmail" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        <label htmlFor="newPassword">Password</label>
        <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <div className="message-error">{error}</div>
        <button className="form-button" onClick={handleSignUpClick}>
          Create Account
        </button>
        <div className="sub-button">
          <span> Already have an account? </span>
          <button onClick={toggleForm}>Login</button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
