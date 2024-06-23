import React, { useState } from "react";
import axios from "axios";
import LoadingButton from "../loadingButton/LoadingButton";
import FormInput from "./FormInput";

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
      <FormInput label="Old Password" id="oldPassword" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />

      <FormInput label="New Password" id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

      {responseMessage && <span className="text-center my-4 block">{responseMessage}</span>}

      <LoadingButton
        loading={loading}
        onClick={handleUpdatePassword}
        style={{ backgroundColor: "var(--color-3)" }}
        className="text-center my-4 rounded bg-gray-500 px-4 py-2 text-white w-full md:w-1/2 "
        btnText="Update Password"
      />
    </>
  );
};

export default UpdatePassword;
