import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { register } from '../../../features/auth/authSlice';
import { validate } from "./validationUtils";
import { useNavigate } from "react-router";

const SignUpForm = ({ toggleForm, toggleModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUpClick = async () => {
    const validationError = validate(newEmail, newPassword); 
    if (validationError) {
      setError(validationError);
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: newEmail, password: newPassword })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch(register(data.user));
      toggleModal();
      navigate("/designs");
    } else {
      setError('Email already in use');
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
