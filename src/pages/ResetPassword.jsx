import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingButton from "../components/loadingButton/LoadingButton";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/reset-password/${accessToken}`, {
        password: password,
      });

      setMessage("Password reset successfully!");
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#481b91] to-[#240d55]">
      <section className="container mx-auto px-4 md:px-6 flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-5xl font-bold mb-8 text-center text-white">Reset Password</h1>
        <div className="mt-6 flex max-w-md gap-x-4">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="min-w-0 outline-none flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter your new password"
          />
          <LoadingButton
            loading={loading}
            onClick={handleResetPassword}
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            btnText="Reset password"
          />
        </div>

        {message && <div className="text-green-700 p-2 w-full md:w-1/2 text-center mt-4">{message}</div>}
      </section>
    </div>
  );
};

export default ResetPassword;
