import React, { useState } from "react";
import LoginForm from "../modal/LoginForm.jsx";
import SignUpForm from "../modal/SignUpForm.jsx";

const SigninLogin = ({ setIsSignedIn }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };


  return isLoginForm ? <LoginForm toggleForm={toggleForm} handleSignIn={setIsSignedIn} /> : <SignUpForm toggleForm={toggleForm} />;
};

export default SigninLogin;
