import React from "react";
import { Link } from "react-router-dom";
import "./designCard.css";

const DesignCard = ({ Designdata, index }) => {
  return (
    <>
      <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
        <div className="design-Img-container mb-2">
          {index > 0 ? (
            <img src={Designdata.imageUrl} className="design-Img object-cover w-full" alt="design--Img" />
          ) : (
            <Link to={`/build-your-own-page`}>
              <img src={Designdata.imageUrl} className="object-cover w-full" alt="plank--Img" />
            </Link>
          )}
        </div>

        <div className="design-info px4 py-2">
          <h2 className="designs-title font-bold text-xl text-center font-semibold">{Designdata.title}</h2>
          <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
        </div>
        {index > 0 ? (
          <div className="button-container px-4 flex justify-between gap-4">
            <Link className="flex justify-center items-center rounded-md px-4 py-2 Build-button" to={`/build-trial-design${index}`}>
              Build
            </Link>
            <Link className="Preview-button flex justify-center items-center rounded-md px-4 py-2" to={`/preview-trial-design${index}`}>
              Preview
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DesignCard;
