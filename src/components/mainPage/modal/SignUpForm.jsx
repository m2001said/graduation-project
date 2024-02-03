import React from "react";

const SignUpForm = ({ toggleForm }) => (
  <>
    <h1>Create Account</h1>
    <div className="modal-form">
      <label htmlFor="newEmail">Email</label>
      <input type="email" id="newEmail" />
      <label htmlFor="newPassword">Password</label>
      <input type="password" id="newPassword" />
      <div className="message-error"></div>
      <button className="form-button">Create Account</button>
      <div className="sub-button">
        <span> Already have an account? </span>
        <button onClick={toggleForm}>Login</button>
      </div>
    </div>
  </>
);

export default SignUpForm;
