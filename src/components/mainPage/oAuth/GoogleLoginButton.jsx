import React from "react";

const GoogleLoginButton = () => {
  const handleLogin = () => {
      window.location.href = `${process.env.REACT_APP_BACKEND_URL}/user/auth/google`
  };

  return (
    <div>
      <button onClick={handleLogin} className="text-black text-center w-full">Login with Google</button>
    </div>
  );
};

export default GoogleLoginButton;
