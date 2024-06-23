import React from "react";
import UpdatePassword from "../components/userInformation/UpdatePassword";
import UpdateName from "../components/userInformation/UpdateUserName";
import UpdateUserPicture from "../components/userInformation/UpdateUserPicture";

const UserInformation = () => {
  return (
    <div className="demo-section bg-gradient-to-r from-[#481b91] to-[#240d55] min-h-screen">
      <h1 className="text-3xl font-bold tracking-tighter mb-10 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Update Your Information</h1>
      <div className="container flex flex-col px-4 py-10 mx-auto items-center">
        <UpdateUserPicture></UpdateUserPicture>
        <UpdateName></UpdateName>
        <UpdatePassword></UpdatePassword>
      </div>
    </div>
  );
};

export default UserInformation;
