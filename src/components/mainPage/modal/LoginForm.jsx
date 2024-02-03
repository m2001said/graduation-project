import React from "react";

const LoginForm = ({ toggleForm, handleSignIn }) => {
  const handleSignInClick = () => {
    // Perform validation or other actions
    handleSignIn();
    document.querySelector(".modal-overlay").classList.add("closed");
  };

  return (
    <>
      <h1>Login</h1>
      <div className="modal-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <div className="message-error"></div>
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
