import React from "react";
import { Link } from "react-router-dom";
import "./designCard.css";

const DesignCard = ({ Designdata, index }) => {
  return (
    <>
      {index > 0 && (
        <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
          <div className="design-Img-container mb-2">
            <img src={Designdata.imageUrl} className="design-Img object-cover w-full" alt="design--Img" />
          </div>

          <div className="design-info px4 py-2">
            <h2 className="designs-title font-bold text-xl text-center font-semibold">{Designdata.title}</h2>
            <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
          </div>
          <div className="button-container px-4 flex justify-between gap-4">
            <Link className="flex justify-center items-center  w-full py-2 Build-button design-btn" to={`/build-trial-design${index}`}>
              Build
            </Link>
            <Link className="Preview-button flex justify-center items-center  w-full py-2 design-btn" to={`/preview-trial-design${index}`}>
              Preview
            </Link>
          </div>
        </div>
      )}
      {index === 0 && (
        <Link to={`/PageCraft`}>
          <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
            <div className="design-Img-container mb-2">
              <img src={Designdata.imageUrl} className="design-Img object-cover w-full" alt="design--Img" />
            </div>

            <div className="design-info px4 py-2">
              <h2 className="designs-title font-bold text-xl text-center font-semibold">{Designdata.title}</h2>
              <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default DesignCard;
