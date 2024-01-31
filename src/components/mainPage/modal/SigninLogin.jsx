import React, { useState } from "react";
import LoginForm from "../modal/LoginForm.jsx";
import SignUpForm from "../modal/SignUpForm.jsx";

const SigninLogin = ({ handleSignIn }) => {
  // for login/signin form
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return isLoginForm ? <LoginForm toggleForm={toggleForm} handleSignIn={handleSignIn} /> : <SignUpForm toggleForm={toggleForm} />;
};

export default SigninLogin;
