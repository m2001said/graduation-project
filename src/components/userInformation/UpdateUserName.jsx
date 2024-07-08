import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../features/auth/authSlice";
import LoadingButton from "../loadingButton/LoadingButton";
import FormInput from "./FormInput";

const UpdateName = () => {
  const [newName, setNewName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleUpdateName = async () => {
    setLoading(true);
    setResponseMessage("");
    try {
      const response = await axios.put("/user/update-username", {
        name: newName,
      });
      setResponseMessage("Name updated successfully!");
      dispatch(updateUserName(newName));
    } catch (error) {
      setResponseMessage("Error updating name. Please try again.");
      console.error("Name update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormInput label="Old Name" id="Email" type="text" value={authState.email || authState.user.email} />
      <FormInput label="Old Name" id="Name" type="text" value={authState.userName || authState.user.name} />
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
