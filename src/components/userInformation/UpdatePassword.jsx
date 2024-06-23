import React, { useState } from "react";
import axios from "axios";
import LoadingButton from "../loadingButton/LoadingButton";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleUpdatePassword = async () => {
    setLoading(true);
    setResponseMessage("");
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
      setResponseMessage("Password updated successfully!");
      console.log("Password update response:", response.data);
    } catch (error) {
      setResponseMessage("Error updating password. Please try again.");
      console.error("Password update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-full md:w-1/2 mx-auto">
        <label className="text-white w-full md:w-1/4" htmlFor="oldPassword">
          Old Password
        </label>
        <input
          type="password"
          id="oldPassword"
          className="p-2 outline-none w-full md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-full md:w-1/2 mx-auto">
        <label className="text-white w-full md:w-1/4" htmlFor="newPassword">
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          className="p-2 outline-none w-full md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      {responseMessage && <span className="text-center my-4 block">{responseMessage}</span>}

      <LoadingButton
        loading={loading}
        onClick={handleUpdatePassword}
        style={{ backgroundColor: "var(--color-3)" }}
        className="text-center my-4 rounded bg-gray-500 px-4 py-2 text-white w-full md:w-1/2 "
        btnText="Update Name"
      />
    </>
  );
};

export default UpdatePassword;
