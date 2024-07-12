import React, { useState } from "react";
import axios from "axios";
import LoadingButton from "../components/loadingButton/LoadingButton";

const FailedVerified = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResendEmailVerification = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/resend-email-verification`, {
        email: email,
      });

      if (response.status === 200) {
        setMessage("Email verification resent successfully.");
      }
    } catch (error) {
      setMessage("Error resending email verification. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#481b91] to-[#240d55] flex flex-col justify-center items-center min-h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-auto h-48">
        <path
          fill="#B197FC"
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
        />
      </svg>
      <h1 className="text-3xl mt-10 font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">Email verification failed.</h1>
      <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-center">
        You have delayed the email verification process. Please enter your email again to reverify.
      </p>
      <div className="mt-6 flex max-w-md gap-x-4">
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 outline-none flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <LoadingButton
          loading={loading}
          onClick={handleResendEmailVerification}
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          btnText="Reverify"
        />
      </div>
      {message && <p className="mt-4 text-center text-white">{message}</p>}
    </div>
  );
};

export default FailedVerified;
