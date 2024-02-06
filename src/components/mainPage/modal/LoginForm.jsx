import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ toggleForm, handleSignIn }) => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email || !password) {
      setError("Both fields are required.");
      return false;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError(""); // Clear the error message if validation is successful
    return true;
  };

  const handleSignInClick = () => {
    if (validate()) {
      navigate("/Designs");

      handleSignIn();
      document.querySelector(".modal-overlay").classList.add("closed");
    }
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
