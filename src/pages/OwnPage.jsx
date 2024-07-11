import React, { useEffect, useState } from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useTranslation } from "react-i18next";
import NotFound from "./NotFoundPage";

const importComponent = (type, index) => {
  let module = null;
  try {
    if (index) {
      module = require(`../components/sections/${type}s/${type}${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
    }
  } catch (error) {
    try {
      module = require(`../components/sections/${type}s/${type}s${index}/${type.charAt(0).toUpperCase() + type.slice(1)}s${index}`);
    } catch (error) {
      try {
        module = require(`../components/sections/${type}s/${type}s${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
      } catch (error) {
        try {
          module = require(`../components/sections/${type}s/${type}s${index}/${type.charAt(0).toUpperCase() + type.slice(1)}${index}`);
        } catch (error) {
          console.error(`third pattern failed: ${error.message}`);
        }
      }
    }
  }
  return module && module.default ? module.default : null;
};

function removeEmptyArrays(obj) {
  console.log("remove from here");
  for (let prop in obj) {
    if (Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) {
        delete obj[prop];
      }
    } else if (typeof obj[prop] === "object" && obj[prop] !== null) {
      removeEmptyArrays(obj[prop]);
      if (Object.keys(obj[prop]).length === 0) {
        delete obj[prop];
      }
    }
  }
}

const OwnPage = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  let ownTemplate = useSelector((state) => state.ownTemplate);
  let selectedData = location.state || ownTemplate?.templateInfo?.selectedSections;
  const searchParams = new URLSearchParams(location.search);
  const userId = useSelector((state) => state.auth.user && state.auth.user._id) || searchParams.get("userId");
  const dispatch = useDispatch();
  const templateId = searchParams.get("templateId") || null;
  const [templateData, setTemplateData] = useState(null);
  const id = searchParams.get("id") || templateId || null;

  // edit here
  const screen = useSelector((state) => state.screen);
  const [screenWidth, setScreenWidth] = useState(5000);
  useEffect(() => {
    let sWidth;
    if (screen === "phone") {
      sWidth = "767px";
    } else if (screen === "tablet") {
      sWidth = "1023px";
    } else {
      sWidth = "5000px"; // Default width if screen is neither "phone" nor "tablet"
    }
    setScreenWidth(sWidth);
  }, [screen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // excute in deployment case
    const fetchData = async (tempId) => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/page/${userId}/${tempId}`);
        setTemplateData(res.data);
        removeEmptyArrays(res.data);
        dispatch(ownTemplateActions.deleteSchema()); // remove data in ownpage slice
        dispatch(ownTemplateActions.insertSections({ data: res.data }));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };
    if (templateId) {
      if (!location.pathname.includes("edit")) {
        document.getElementById("main-nav").style.display = "none";
        document.getElementById("template-container").style.marginTop = "0px";
      }

      if (location.pathname.includes("zweb") && !location.pathname.includes("edit-zweb")) {
        fetchData(templateId);
      }
    }
  }, [dispatch, templateId, userId, location.pathname]); // change here on trail

  if (location.pathname.includes("zweb") && !location.pathname.includes("edit-zweb")) {
    ownTemplate = templateData;
  }

  //////////// for change routes
  useEffect(() => {
    const fetchData = async (templateId) => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/page/${userId}/${templateId}`);
        removeEmptyArrays(res.data);
        dispatch(ownTemplateActions.deleteSchema()); // remove data in ownpage slice
        dispatch(ownTemplateActions.insertSections({ data: res.data }));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };
    if (id) {
      fetchData(id);
    }
  }, [dispatch, userId, id]);

  const reorderedComponents = ownTemplate && Object.keys(ownTemplate).length > 0 && Object.keys(ownTemplate);
  const renderComponent = (type, index) => {
    const Component = importComponent(type, index);
    return Component ? <Component key={`${type}-${index}`} /> : null;
  };
  const sectionNames = ["navbar", "hero", "features", "projects", "services", "contact", "team", "testimonials", "footer"];
  const sectionTypes = ["navbar", "hero", "feature", "project", "service", "contact", "team", "testimonial", "footer"];

  let renderOrderedComponents =
    reorderedComponents &&
    reorderedComponents?.map((section) => {
      for (let index = 0; index < sectionTypes.length; index++) {
        const element = sectionTypes[index];
        if (section.startsWith(element)) {
          return { type: sectionTypes[index], index: index };
        }
      }
      return null;
    });
  renderOrderedComponents =
    renderOrderedComponents &&
    renderOrderedComponents?.filter((element) => {
      return element !== null;
    });
  useEffect(() => {
    document.documentElement.style = "";
    for (let index = 1; index <= 18; index++) {
      for (let i = 0; i < ownTemplate?.colors?.templateColors.length; i++) {
        document.documentElement.style.setProperty(`--website-${index}-color-${i + 1}`, ownTemplate?.colors?.templateColors[i]);
      }
    }
  }, [ownTemplate]);

  selectedData = ownTemplate?.templateInfo?.selectedSections;
  const checkCondition = ownTemplate?._id === id || id === null ;
  const copyObjectWithoutId = (obj) => {
    const newObj = {};
    for (let key in obj) {
      if (key !== "_id") {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  };
  const newOwnTemplate = copyObjectWithoutId(ownTemplate);
  return ownTemplate && Object.keys(ownTemplate).length > 0 && checkCondition ? (
    templateId ? (
      <>{renderOrderedComponents.map((element) => renderComponent(element.type, selectedData[`${sectionNames[element.index]}IndexSelected`]))}</>
    ) : (
      <>
        <section className="dashboard-container mx-auto relative">
          <TopSide schema={newOwnTemplate} />
          <div className={`w-full ${screen === "phone" ? "flex content-start" : "flex-between"} flex-col md:flex-row dashboard-subContainer overflow-hidden`}>
            <LeftSide targetTemplate={newOwnTemplate} updateAllRef={ownTemplateActions} />
            <div
              className="max-md:w-full md:w-70 flex-auto  flex justify-start flex-col items-center text-black p-2"
              style={{ height: "calc(100vh - 56px)", maxWidth: screenWidth }}
            >
              <div
                className={`w-full border border-slate-300 shadow ${
                  screen === "phone" ? "md:rounded-3xl " : "md:rounded-tl-3xl md:rounded-bl-3xl"
                }    mb-2 overflow-y-auto overflow-x-hidden  mx-2 md:mx-4 md:self-start md:ml-1 relative`}
              >
                {renderOrderedComponents.map((element) => renderComponent(element.type, selectedData[`${sectionNames[element.index]}IndexSelected`]))}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  ) : isLoading ? (
    <div className="designs-section flex items-center justify-center">
      <Loader />
    </div>
  ) : !ownTemplate?.savingflag ? (
    <div className="fixed top-0 left-0 w-full h-full d-flex items-center justify-center">
      <NotFound />
    </div>
  ) : (
    <div className="fixed top-0 left-0 w-full h-full d-flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default OwnPage;
