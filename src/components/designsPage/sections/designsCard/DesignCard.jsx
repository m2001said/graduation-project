import React from "react";
import { Link } from "react-router-dom";
import "./designCard.css";

const DesignCard = ({ Designdata, index }) => {
  return (
    <>
      <div className="design-card rounded-lg overflow-hidden shadow-lg p-4">
        <div className="design-Img-container">
          <img src={Designdata.imageUrl} className="object-cover w-full" alt="design--Img" />
          <Link className="Preview-button flex justify-center items-center" to={`/preview-trial-design${index}`}>
            <img src="https://res.cloudinary.com/duc04fwdb/image/upload/v1706887574/jammal_photos/inkcorzh0n6jvtfvolgq.svg" alt="" />
          </Link>
        </div>

        <div className="design-info py-2">
          <h2 className="designs-title font-bold text-xl font-semibold">{Designdata.title}</h2>
          <p className="designs-description text-gray-600 text-sm ">{Designdata.description}</p>
        </div>

        <Link className="flex justify-center items-center text-white rounded-md mt-2 px-4 py-2 Build-button" to={`/build-trial-design${index}`}>
          Build
        </Link>
      </div>
    </>
  );
};

export default DesignCard;
