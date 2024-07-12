import React, { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import OauthLoginButton from "../oAuth/OauthLoginButton.jsx";
const SigninLoginToggle = ({ toggleModal }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return isLoginForm ? (
    <>
      <LoginForm toggleModal={toggleModal} toggleForm={toggleForm} />
      <div className="w-full flex justify-center items-center text-gray-500 relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 top-1/2 w-full border-t border-gray-400"></span>
        <span className="relative z-10 bg-white px-4">Or</span>
      </div>
      <OauthLoginButton></OauthLoginButton>
    </>
  ) : (
    <>
      <SignUpForm toggleModal={toggleModal} toggleForm={toggleForm} />
      <div className="w-full flex justify-center items-center text-gray-500 relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 top-1/2 w-full border-t border-gray-400"></span>
        <span className="relative z-10 bg-white px-4">Or</span>
      </div>
      <OauthLoginButton></OauthLoginButton>
    </>
  );
};

export default SigninLoginToggle;
