import React from "react";
import UpdatePassword from "../components/userInformation/UpdatePassword";
import UpdateName from "../components/userInformation/UpdateUserName";
import UpdateUserPicture from "../components/userInformation/UpdateUserPicture";

const UserInformation = () => {
  return (
    <div className="demo-section bg-gradient-to-r from-[#481b91] to-[#240d55] min-h-screen">
      <div className="container flex flex-col px-4 py-10 mx-auto items-center">
        <div className="img-box flex flex-col md:flex-row items-center gap-4 mb-8"></div>

        {/* <button
          style={{ backgroundColor: "var(--color-3)" }}
          className="text-center my-4 rounded bg-gray-500 px-4 py-2 text-white w-1/2"
          onClick={handleUpdateInformation}
        >
          Update Information
        </button> */}
        <UpdateUserPicture></UpdateUserPicture>
        <UpdateName></UpdateName>
        <UpdatePassword></UpdatePassword>
      </div>
    </div>
  );
};

export default UserInformation;
