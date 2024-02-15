import React, { useState } from "react";
import LoginForm from "../modal/LoginForm.jsx";
import SignUpForm from "../modal/SignUpForm.jsx";

const SigninLogin = ({ setIsSignedIn, toggleModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };


  return isLoginForm ? <LoginForm toggleModal={toggleModal} toggleForm={toggleForm} handleSignIn={setIsSignedIn} /> : <SignUpForm toggleModal={toggleModal} toggleForm={toggleForm} />;
};

export default SigninLogin;
