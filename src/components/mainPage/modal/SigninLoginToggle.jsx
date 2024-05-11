import React, { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";

const SigninLoginToggle = ({ toggleModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };


  return isLoginForm ? (
    <LoginForm toggleModal={toggleModal} toggleForm={toggleForm} />
  ) : (
    <SignUpForm toggleModal={toggleModal} toggleForm={toggleForm} />
  );
};

export default SigninLoginToggle;
