import React, { useState } from "react";
import UploadWidget from "../dashboard/cloudinary/UploadWidget";
import axios from "axios";

const UpdateUserPicture = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [status, setStatus] = useState("");
  const token = localStorage.getItem("token");

  const handleUpload = async (error, result) => {
    if (error) {
      console.error("Upload Error:", error);
      setStatus("Cloudinary upload failed.");
      return;
    }

    if (result.event === "success") {
      const imageUrl = result.info.secure_url;
      setUploadedImage(imageUrl);
      setStatus("Uploading to backend...");
      console.log(imageUrl);
      try {
        const response = await axios.post(
          "https://websitebuilderbackend-production-716e.up.railway.app/upload",
          { imageUrl },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setStatus("File uploaded successfully!");
          console.log(response);
        } else {
          setStatus("File upload to backend failed.");
        }
      } catch (error) {
        console.error("Error uploading to backend:", error);
        setStatus("Error uploading to backend.");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row my-4 justify-between gap-4 items-center w-full md:w-1/2 mx-auto">
        {uploadedImage && (
          <div>
            <img src={uploadedImage} alt="Uploaded" />
          </div>
        )}
        <UploadWidget onUpload={handleUpload}>
          {({ open }) => (
            <div>
              <button onClick={open} style={{ backgroundColor: "var(--color-3)" }} className="text-center my-4 rounded bg-gray-500 px-4 py-2 text-white w-full">
                Upload Image
              </button>
              <br />
              {status && <p>{status}</p>}
            </div>
          )}
        </UploadWidget>
      </div>
    </div>
  );
};

export default UpdateUserPicture;
