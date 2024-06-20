import React, { useState } from "react";
import axios from "axios";

const UpdateName = () => {
  const [newName, setNewName] = useState("");
  const token = localStorage.getItem("token");

  const handleUpdateName = async () => {
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
      console.log("Name update response:", response.data);
    } catch (error) {
      console.error("Name update error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-1/2">
        <label className="text-white w-full md:w-1/4" htmlFor="newName">
          New Name
        </label>
        <input
          type="text"
          id="newName"
          className="p-2 outline-none md:w-3/4 rounded border-solid border-1 border-white bg-white text-black"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>

      <button className="p-2 bg-blue-500 text-white rounded-md" onClick={handleUpdateName}>
        Update Name
      </button>
    </>
  );
};

export default UpdateName;
