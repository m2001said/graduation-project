// src/components/Posts.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTemplates } from "../features/templates/templatesSlice";
import "../components/designsPage/sections/designsContainer.css";
import "../components/designsPage/sections/designsCard/designCard.css";
import preview from "../assets/images/show.png";
import build from "../assets/images/deploy.jpg";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { Loading } from "../components/loading/Loading";
const YourWebsites = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.templates);
  const status = useSelector((state) => state.templates.status);
  const error = useSelector((state) => state.templates.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTemplates());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="designs-section">
        <Loading />
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

  return (
    <>
      <div className="designs-section">
        <div className="container mx-auto px-4  py-4">
          <h1 className="text-3xl font-bold tracking-tighter mb-4 text-center text-white sm:text-4xl md:text-5xl lg:text-6xl/none">Your Websites</h1>
          {templates.length >= 1 ? (
            <>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-center">Discover the incredible websites you've created.</p>
              <div className="designs-container flex flex-wrap gap-8 justify-center">
                {templates.map((template, index) => (
                  <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
                    <div className="design-Img-container mb-2">
                      <Loader src={template.image} alt="design--Img" />
                    </div>

                    <div className="design-info px4 py-2">
                      <h2 className="designs-title font-bold text-xl text-center font-semibold">{template.title}</h2>
                      <p className="designs-description text-gray-600 text-sm  text-center ">{template.description}</p>
                    </div>
                    <div className="button-container px-4 flex justify-between gap-4">
                      <button className="flex justify-center gap-4 items-center w-full py-2 Build-button design-btn">
                        <span>Deploy</span>
                        <img src={build} alt="build-icon" className="btn-icon" />
                      </button>
                      <Link className="Preview-button flex justify-center gap-4 items-center  w-full py-2 design-btn" to={`/preview-trial-design${index}`}>
                        <span>Preview</span>
                        <img src={preview} alt="preview-icon" className="btn-icon" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-center">
                No Websites has been created by you{" "}
                <Link to="/designs" className="text-gray-400">
                  Create One
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
