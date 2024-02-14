import React, { useState } from "react";
import LoginForm from "../modal/LoginForm.jsx";
import SignUpForm from "../modal/SignUpForm.jsx";

const SigninLogin = ({ setIsSignedIn, closeModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };


  return isLoginForm ? <LoginForm closeModal={closeModal} toggleForm={toggleForm} handleSignIn={setIsSignedIn} /> : <SignUpForm closeModal={closeModal} toggleForm={toggleForm} />;
};

export default SigninLogin;
