import React, { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import GoogleLoginButton from "../oAuth/GoogleLoginButton.jsx"
const SigninLoginToggle = ({ toggleModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return isLoginForm ? (
    <>
      <LoginForm toggleModal={toggleModal} toggleForm={toggleForm} />
      <GoogleLoginButton></GoogleLoginButton>
    </>
  ) : (
    <>
      <SignUpForm toggleModal={toggleModal} toggleForm={toggleForm} />
      <GoogleLoginButton></GoogleLoginButton>
    </>
  );
};

export default SigninLoginToggle;
