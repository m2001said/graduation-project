import React from "react";
import { Link } from "react-router-dom";
import Confetti from "../components/mainPage/congrats/Confetti";

const SuccessVerified = () => {
  return (
    <>
      <Confetti></Confetti>
      <div className="bg-gradient-to-r from-[#481b91] to-[#240d55]">
        <section className="container mx-auto px-4 md:px-6 flex flex-col justify-center items-center min-h-screen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-auto h-48">
            <path
              fill="#B197FC"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
          </svg>
          <h1 className="text-3xl mt-10 font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">Email Verification Successful</h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-center">
            Your email has been successfully verified. Please return to the login page.
          </p>
          <Link className="rounded-md text-sm font-medium h-10 my-6 px-4 py-2 bg-white text-gray-900 hover:text-black" to={"/"}>
            Go back home
          </Link>
        </section>
      </div>
    </>
  );
};

export default SuccessVerified;
