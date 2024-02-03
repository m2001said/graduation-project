import React from "react";
import { Link } from "react-router-dom";
import "./designCard.css";

const DesignCard = ({ Designdata, index }) => {
  return (
    <>
      <div className="design-card rounded-lg overflow-hidden shadow-lg p-4">
        <div className="design-Img-container">
          <img src={Designdata.imageUrl} className="object-cover w-full" alt="design--Img" />
          <Link className="Preview-button" to={`/preview-trial-design${index}`}>
            <button className="flex justify-center items-center">
              <img src="https://res.cloudinary.com/duc04fwdb/image/upload/v1706887574/jammal_photos/inkcorzh0n6jvtfvolgq.svg" alt="" />
            </button>
          </Link>
        </div>
        <div className="design-info py-2">
          <h2 className="designs-title font-bold text-xl font-semibold">{Designdata.title}</h2>
          <p className="designs-description text-gray-600 text-sm ">{Designdata.description}</p>
        </div>
        <div className="buttons-container pt-2 ">
          <Link to={`/build-trial-design${index}`}>
            <button className=" text-white rounded-md px-4 py-2 Build-button">Build</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DesignCard;
