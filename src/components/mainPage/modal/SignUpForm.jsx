import React, { useState } from "react";

const SignUpForm = ({ toggleForm }) => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!newEmail || !newPassword) {
      setError("Both fields are required.");
      return false;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(newEmail)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError(""); // Clear the error message if validation is successful
    return true;
  };

  const handleSignUpClick = () => {
    if (validate()) {
      // handleSignUp(); 
      document.querySelector(".modal-overlay").classList.add("closed");
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
