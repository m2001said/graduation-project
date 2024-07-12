import React from "react";
import google from "../../../assets/images/google.svg";
import facebook from "../../../assets/images/facebook.svg";

const OauthLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/user/auth/google`;
  };
    const handleFacebookLogin = () => {
      window.location.href = `${process.env.REACT_APP_BACKEND_URL}/user/auth/facebook`;
    };

  return (
    <div className="flex justify-center gap-2">
      <button onClick={handleGoogleLogin} className="p-1 rounded-full shadow-md">
        <img src={google} alt="" className="w-10"/>
      </button>
      <button onClick={handleFacebookLogin} className="p-1 rounded-full shadow-md">
        <img src={facebook} alt="" className="w-10" />
      </button>
    </div>
  );
};

export default OauthLoginButton;
