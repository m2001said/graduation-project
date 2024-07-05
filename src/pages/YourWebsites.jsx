import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTemplate, fetchTemplates } from "../features/templates/templatesSlice";
import "../components/designsPage/sections/designsContainer.css";
import "../components/designsPage/sections/designsCard/designCard.css";
import preview from "../assets/images/show.png";
import build from "../assets/images/deploy.jpg";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Confetti from "react-confetti";
import { templateActions1 } from "../features/templateData/templateSlice";
import { CopyToClipboard } from "react-copy-to-clipboard";
import aiPoster from "../assets/images/mainPageAssets/hero-min.svg";

import axios from "axios";
import "../globals.css";
import { useTranslation } from "react-i18next";
import BaseModal from "../components/mainPage/modal/BaseModal/BaseModal";

const YourWebsites = () => {
  const { i18n, t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.templates);
  const status = useSelector((state) => state.templates.status);
  const error = useSelector((state) => state.templates.error);
  const userId = useSelector((state) => state.auth.user._id);
  const [isCelebrityBirthday, setIsCelebrityBirthday] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [btnTxt, setBtnTxt] = useState(true);
  const navigate = useNavigate();

  const handleCopy = () => {
    setCopied(true);
  };
  useEffect(() => {
    if (status === "idle") {
      try {
        dispatch(fetchTemplates('website'));
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    }
    const mani_nave = document.getElementById("main-nav");
    mani_nave.style.display = "block";
    const mani_margin = document.getElementById("template-container");
    mani_margin.style.marginTop = "77px";
  }, [dispatch, status]);
  if (status === "loading") {
    return (
      <div className="designs-section flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="designs-section">
        <div className="container mx-auto px-4  py-4">Error: {error}</div>
      </div>
    );
  }

  const versions = (array) => {
    const versionsNumber = {};
    return templates.map((template) => {
      const id = template.templateInfo.id;
      if (versionsNumber[id]) {
        versionsNumber[id]++;
      } else {
        versionsNumber[id] = 1;
      }
      return {
        ...template,
        versionNumber: versionsNumber[id],
      };
    });
  };

  const handleDeleteTemplate = async (templateId) => {
    dispatch(deleteTemplate(templateId , 'website'))
      .unwrap()
      .then((result) => {
        console.log(`Template with ID ${result} deleted successfully.`);
      })
      .catch((error) => {
        console.error("Failed to delete template:", error.message);
      });
  };

  const fetchData = async (templateNum, templateId) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://websitebuilderbackend-production-716e.up.railway.app/website/${userId}/${templateId}`);
      console.log("res.data", res.data);
      dispatch(templateActions1.updateSchema(res.data));
      setIsLoading(false);
      navigate(`/edit-zweb${templateNum}?id=${templateId}`);
      document.documentElement.style = "";
      for (let index = 0; index < res.data.colors?.templateColors.length; index++) {
        document.documentElement.style.setProperty(`--website-color-${index + 1}`, res.data.colors?.templateColors[index]);
      }
    } catch (error) {
      console.error("Error fetching template data:", error);
    }
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsCelebrityBirthday(!isCelebrityBirthday);
  };
  return isLoading ? (
    <div className="designs-section flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <>
      {/* {chooseDomain && (
        <> */}
      {isModalOpen && (
        <BaseModal poster={aiPoster} toggleModal={toggleModal}>
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2">
                <input readOnly className="flex-grow bg-transparent border-none focus:outline-none" type="text" value={url} />
                <CopyToClipboard text={url} onCopy={handleCopy}>
                  <button className="ml-2 py-1 px-3 bg-indigo-500 text-white rounded-md focus:outline-none" onClick={handleCopy}>
                    {copied ? <span>Copied!</span> : <span>Copy</span>}
                  </button>
                </CopyToClipboard>
              </div>
              <p className="text-gray-500 text-sm">Click the Copy button to copy the URL.</p>
              <p className="text-gray-800 mt-5 p-1 text-sm ">
                For custom domains, please reach out to{" "}
                <a className="text-blue-500 hover:underline hover:text-blue-800" href="/support">
                  Support
                </a>
                .
              </p>
            </div>
          </div>
        </BaseModal>
      )}
      {/* <div
            className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-60 z-40 "
            id="confetti"
            onClick={() => {
              setChooseDomain(false);
              setShow(false);
              setDomain("");
              setIsCelebrityBirthday(false);
            }}
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-l">
              <h2 className="text-2xl font-bold mb-4">Create shared URL</h2>
              {!show && (
                <>
                  <input
                    type="text"
                    value={domain}
                    placeholder="Please enter your domain name!"
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                    onChange={(e) => {
                      setDomain(e.target.value);
                    }}
                  />
                  <button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition duration-300 ease-in-out"
                    style={{ backgroundColor: !domain && "indigo", cursor: !domain && "not-allowed" }}
                    onClick={() => {
                      if (domain) {
                        setShow(true);
                        setIsCelebrityBirthday(true);
                        document.getElementById("confetti").style.opacity = "0.1";
                      }
                    }}
                  >
                    Save
                  </button>
                  <p className="text-gray-800 mt-3 p-1 text-xl">
                    For custom domains, please reach out to{" "}
                    <a className="text-blue-500 hover:underline hover:text-blue-800" href="/support">
                      Support
                    </a>
                    .
                  </p>
                </>
              )}
              {show && (
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between bg-gray-100 p-2 rounded-md mb-2">
                      <input readOnly className="flex-grow bg-transparent border-none focus:outline-none" type="text" value={url + domain} />
                      <CopyToClipboard text={url + domain} onCopy={handleCopy}>
                        <button className="ml-2 py-1 px-3 bg-indigo-500 text-white rounded-md focus:outline-none" onClick={handleCopy}>
                          {copied ? <span>Copied!</span> : <span>Copy</span>}
                        </button>
                      </CopyToClipboard>
                    </div>
                    <p className="text-gray-500 text-sm">Click the Copy button to copy the URL.</p>
                  </div>
                </div>
              )}
            </div>
          </div> */}
      {/* </>
      )} */}
      <div className="designs-section">
        <div className="container mx-auto px-4  py-4">
          <h1 className="text-3xl font-bold tracking-tighter mb-4 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none"> {t("WEBSITES.TITLE")}</h1>
          {status === "succeeded" && templates.length >= 1 ? (
            <>
              {isCelebrityBirthday && <Confetti width={window.innerWidth} height={window.innerHeight} />}
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-center"> {t("WEBSITES.DESCRIPTION")}</p>
              <div className="designs-container flex flex-wrap gap-8 justify-center">
                {versions(templates).map((template, index) => (
                  <div className="websites design-card rounded-lg overflow-hidden shadow-lg flex flex-column  relative" key={template._id} id={template._id}>
                    <div
                      className="absolute left-[-36px] top-[-36px] z-30 w-[100px] h-[100px] flex justify-center items-center text-2xl rounded-full"
                      style={{ padding: "2rem 0 0 2rem", backgroundColor: "rgb(67 12 123)" }}
                    >
                      V{template.versionNumber}
                    </div>

                    <div
                      className="trash absolute left-[-36px] top-[-36px] z-30 w-[100px] h-[100px] flex justify-center items-center text-2xl rounded-full"
                      style={{ padding: "2rem 0 0 2rem", backgroundColor: "white" }}
                    >
                      <img
                        src="/assets/icons/trash.svg"
                        alt="delete"
                        style={{ width: 35, cursor: "pointer" }}
                        onClick={() => {
                          handleDeleteTemplate(template._id);
                        }}
                      />
                    </div>
                    <div className="design-Img-container mb-2">
                      <Loader src={template.templateInfo.imgUrl} alt="design--Img" />
                    </div>

                    <div className="design-info px4 py-2">
                      <h2 className="designs-title font-bold text-xl text-center">{template.templateInfo.title}</h2>
                      <p className="designs-description text-gray-600 text-sm  text-center ">{template.templateInfo.description}</p>
                    </div>
                    <div className="button-container px-4 flex justify-between gap-4">
                      <button
                        className="flex justify-center gap-4 items-center w-full py-2 Build-button design-btn"
                        onClick={() => {
                          setUrl(`http://localhost:3000/zweb${template.templateInfo.id}?userId=${userId}&templateId=${template._id}`);
                          toggleModal()
                        }}
                      >
                        <span>Deploy</span>
                        <img src={build} alt="build-icon" className="btn-icon" />
                      </button>
                      <button
                        className="Preview-button flex justify-center gap-4 items-center  w-full py-2 design-btn"
                        onClick={() => {
                          fetchData(template.templateInfo.id, template._id);
                        }}
                      >
                        <span>Edit</span>
                        <img src={preview} alt="preview-icon" className="btn-icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-center">
                {t("WEBSITES.NO_WEBSITES")}
                <Link to={`/${i18n.language}/designs`} className="text-gray-400">
                  {t("WEBSITES.CREATE")}
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default YourWebsites;
