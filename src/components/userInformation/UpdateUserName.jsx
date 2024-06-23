import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../features/auth/authSlice";
import LoadingButton from "../loadingButton/LoadingButton";
import FormInput from "./FormInput";

const UpdateName = () => {
  const [newName, setNewName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const handleUpdateName = async () => {
    setLoading(true);
    setResponseMessage("");
    try {
      const response = await axios.put(
        "https://websitebuilderbackend-production-716e.up.railway.app/user/update-username",
        {
          name: newName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage("Name updated successfully!");
      dispatch(updateUserName(newName));
      console.log("Name update response:", response.data);
    } catch (error) {
      setResponseMessage("Error updating name. Please try again.");
      console.error("Name update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormInput label="New Name" id="newName" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      {responseMessage && <span className="text-center my-4 block">{responseMessage}</span>}
      <LoadingButton
        loading={loading}
        onClick={handleUpdateName}
        style={{ backgroundColor: "var(--color-3)" }}
        className="text-center my-4 rounded bg-gray-500 px-4 py-2 text-white w-full md:w-1/2 "
        btnText="Update Name"
      />
    </>
  );
};

export default UpdateName;
