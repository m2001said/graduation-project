import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { validate } from './validationUtils';

const LoginForm = ({ toggleForm, handleSignIn }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");




  const handleSignInClick = () => {
    const validationError = validate(email, password);
    if (validationError) {
      setError(validationError);
      return;
    }
  
    // Proceed with sign-in logic
    navigate("/designs");
    handleSignIn();
    document.querySelector(".modal-overlay").classList.add("closed");
  };
  
  return (
    <>
      <h1>Login</h1>
      <div className="modal-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="message-error">{error}</div>
        <button className="form-button" onClick={handleSignInClick}>
          Login
        </button>
        <div className="sub-button">
          <span> Don't have an account? </span>
          <button onClick={toggleForm}>Create Account</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
