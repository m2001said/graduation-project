import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../Loader/Loader.jsx";
import "./designCard.css";
import BaseModal from "../../../mainPage/modal/BaseModal/BaseModal.jsx";
import AiForm from "../../../mainPage/modal/aiForm/AiForm.jsx";
import aiPoster from "../../../../assets/images/mainPageAssets/hero-min.svg";

const DesignCard = ({ Designdata, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen ? (
        <BaseModal poster={aiPoster} toggleModal={toggleModal}>
          <AiForm index={index - 1} />
        </BaseModal>
      ) : null}
      {index > 1 && (
        <div className="design-card rounded-2xl overflow-hidden shadow-lg flex flex-column">
          <div className="design-Img-container mb-2">
            <Loader src={Designdata.imageUrl} alt="design--Img" />
          </div>

          <div className="design-info px4 py-2">
            <h2 className="designs-title  text-xl text-center font-semibold">{Designdata.title}</h2>
            <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
          </div>
          <div className="button-container p-4 flex justify-between gap-4">
            <button
              className="flex items-center gap-4 bg-[#ce79cc] text-white font-bold py-2 px-4 hover:shadow-lg rounded-full w-full hover:bg-[#b568b8]"
              onClick={() => toggleModal(index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                <path
                  fill="#ffffff"
                  d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                />
              </svg>
              {t("USER.BUILD_1")}
            </button>

            <Link className=" py-2 px-4 w-20" to={`/${i18n.language}/preview-trial-design${index - 1}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  fill="#ce79cc"
                  d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
      {index === 1 && (
        <Link to={`/${i18n.language}/page-craft`}>
          <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
            <div className="design-Img-container mb-2">
              <Loader src={Designdata.imageUrl} alt="design--Img" />
            </div>

            <div className="design-info px4 py-2">
              <h2 className="designs-title font-bold text-xl text-center font-semibold">{Designdata.title}</h2>
              <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
            </div>
          </div>
        </Link>
      )}
      {index === 0 && (
        <Link to={`/${i18n.language}/websites`}>
          <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
            <div className="design-Img-container mb-2">
              <Loader src={Designdata.imageUrl} alt="design--Img" />
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
