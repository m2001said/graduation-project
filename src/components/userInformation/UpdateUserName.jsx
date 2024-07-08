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
  const token = localStorage.getItem("token");

  const handleUpdateName = async () => {
    setLoading(true);
    setResponseMessage("");
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/user/update-username`,
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
    } catch (error) {
      setResponseMessage("Error updating name. Please try again.");
      console.error("Name update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-full md:w-1/2 mx-auto `}>
        <label className="text-white w-full md:w-1/4" htmlFor="Email">
          Old Email
        </label>
        <input
          type="text"
          id="Email"
          className="p-2 outline-none w-full md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
          value={authState.email || authState.user.email}
          readOnly
        />
      </div>
      <div className={`flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-full md:w-1/2 mx-auto `}>
        <label className="text-white w-full md:w-1/4" htmlFor="Name">
          Old Name
        </label>
        <input
          type="text"
          id="Name"
          className="p-2 outline-none w-full md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
          value={authState.userName || authState.user.name}
          readOnly
        />
      </div>
      <FormInput label="New Name" id="newName" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      {responseMessage && <span className="text-center my-4 block">{responseMessage}</span>}
      <LoadingButton
        loading={loading}
        onClick={handleUpdateName}
        style={{ backgroundColor: "var(--color-3)" }}
        className="text-center my-4 rounded bg-gray-500 px-4 py-2 text-white w-full md:w-1/2"
        btnText="Update Name"
      />
    </>
  );
};

export default UpdateName;
