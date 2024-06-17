import React, { useState } from "react";

const UserInformation = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("https://websitebuilderbackend-production-716e.up.railway.app/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log("File upload response:", data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleUpdateInformation = async () => {
    try {
      const token = localStorage.getItem("token");

      // Update username
      const responseUsername = await fetch("https://websitebuilderbackend-production-716e.up.railway.app/user/update-username", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
        }),
      });
      const dataUsername = await responseUsername.json();
      console.log("Username update response:", dataUsername);

      // Update password
      const responsePassword = await fetch("https://websitebuilderbackend-production-716e.up.railway.app/user/update-password", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      });
      const dataPassword = await responsePassword.json();
      console.log("Password update response:", dataPassword);

      // Update email
      const responseEmail = await fetch("https://websitebuilderbackend-production-716e.up.railway.app/user/update-email", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const dataEmail = await responseEmail.json();
      console.log("Email update response:", dataEmail);

      console.log("Information updated successfully!");
    } catch (error) {
      console.error("Error updating information:", error);
      alert("Failed to update information. Please try again.");
    }
  };

  return (
    <div className="demo-section bg-gradient-to-r from-[#481b91] to-[#240d55] min-h-screen">
      <div className="container flex flex-col px-4 py-10 mx-auto items-center">
        <div className="img-box flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="user_img rounded-full w-20 h-20 bg-gray-700"></div>
          <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="user_img_upload text-white cursor-pointer">
            Change Image
          </label>
          {selectedFile && (
            <button onClick={handleUpload} className="ml-4 bg-gray-500 px-2 py-1 rounded text-white">
              Upload
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-1/2">
          <label className="text-white w-1/4" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="p-2 outline-none md:w-3/4rounded border-solid border-1 border-white bg-white text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-1/2">
          <label className="text-white  w-1/4" htmlFor="oldPassword">
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            className="p-2 outline-none md:w-3/4rounded border-solid border-1 border-white bg-white text-black"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-1/2">
          <label className="text-white  w-1/4" htmlFor="newPassword">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="p-2 outline-none md:w-3/4rounded border-solid border-1 border-white bg-white text-black"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-1/2">
          <label className="text-white  w-1/4" htmlFor="username">
            User Name
          </label>
          <input
            type="text"
            id="username"
            className="p-2 outline-none md:w-3/4rounded border-solid border-1 border-white bg-white text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <button
          style={{ backgroundColor: "var(--color-3)" }}
          className="text-center my-4 rounded bg-gray-500 px-4 py-2 text-white w-1/2"
          onClick={handleUpdateInformation}
        >
          Update Information
        </button>
      </div>
    </div>
  );
};

export default UserInformation;
