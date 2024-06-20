import React, { useState } from "react";
import axios from "axios";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const token = localStorage.getItem("token");

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.post(
        "https://websitebuilderbackend-production-716e.up.railway.app/user/update-password",
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Password update response:", response.data);
    } catch (error) {
      console.error("Password update error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-1/2">
        <label className="text-white w-full md:w-1/4" htmlFor="oldPassword">
          Old Password
        </label>
        <input
          type="password"
          id="oldPassword"
          className="p-2 outline-none md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-1/2">
        <label className="text-white w-full md:w-1/4" htmlFor="newPassword">
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          className="p-2 outline-none md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <button className="p-2 bg-blue-500 text-white rounded-md" onClick={handleUpdatePassword}>
        Update Password
      </button>
    </>
  );
};

export default UpdatePassword;
