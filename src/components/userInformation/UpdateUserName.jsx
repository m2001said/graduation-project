import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../features/auth/authSlice";
import LoadingButton from "../loadingButton/LoadingButton";

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
      <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-full md:w-1/2 mx-auto">
        <label className="text-white w-full md:w-1/4" htmlFor="newName">
          New Name
        </label>
        <input
          type="text"
          id="newName"
          className="p-2 outline-none w-full md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
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
