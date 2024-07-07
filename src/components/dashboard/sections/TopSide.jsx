import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateScreen } from "../../../features/screen/screenSlice";
import { useLocation, useNavigate } from "react-router";
import { fetchTemplates } from "../../../features/templates/templatesSlice";
import { useSearchParams } from "react-router-dom";
import { initialState, templateActions1 } from "../../../features/templateData/templateSlice";
import { useTranslation } from "react-i18next";
import { ownTemplateActions } from "../../../features/templateData/ownTemplateSlice";
import { fetchPages } from "../../../features/templates/pagesSlice";
import { fetchWebsites } from "../../../features/templates/websitesSlice";

const TopSide = ({ schema }) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const screen = useSelector((state) => state.screen);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [isGenerating, setIsGenerating] = useState(false);
  const [waitingMsg, setWaitingMsg] = useState("");
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  const updateToPC = () => {
    dispatch(updateScreen("pc"));
  };
  const updateToTablet = () => {
    dispatch(updateScreen("tablet"));
  };

  const updateToIphone = () => {
    dispatch(updateScreen("phone"));
  };

  const handleSubmit = async () => {
    const regex = /\d+/
    const isUpdating = pathname.includes("edit");
    const inOwnPage = pathname.includes("own-page") || !regex.test(pathname);
    console.log(pathname)
    let url;
    if (inOwnPage) {
      url = isUpdating
        ? `https://websitebuilderbackend-production-716e.up.railway.app/page/update/${id}`
        : "https://websitebuilderbackend-production-716e.up.railway.app/page";
    } else {
      url = isUpdating
        ? `https://websitebuilderbackend-production-716e.up.railway.app/website/update/${id}`
        : "https://websitebuilderbackend-production-716e.up.railway.app/website";
    }
    const text = inOwnPage ? "page" : "website";
    console.log(url);

    console.log(schema);

    try {
      setIsGenerating(true);
      setWaitingMsg(isUpdating ? `Please waite for updating your ${text}` : `Please waite for genrating your ${text}`);
      const res = await fetch(url, {
        method: isUpdating ? "PATCH" : "POST",
        body: JSON.stringify(schema),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const result = await res.json();
      console.log(result);

      console.log("respone after create ", result.data);
      setIsGenerating(false);
      if (inOwnPage) {
        // get pages in pages page
        dispatch(fetchPages()); // need edit
        navigate(`/${i18n.language}/pages`);
        dispatch(ownTemplateActions.deleteSchema()); // remove data in ownpage slice
      } else {
        // get websites in websites page
        dispatch(fetchWebsites());
        navigate(`/${i18n.language}/websites`);
        dispatch(templateActions1.updateSchema(initialState));
      }
    } catch (error) {
      setIsGenerating(false);
      console.error("Error:", error);
    }
  };

  const devices = [
    {
      icon: <img src="/assets/icons/pc.svg" height={22} alt="down" style={{ cursor: "pointer" }} onClick={updateToPC} />,
      endPoint: "5000",
      startPoint: "1024",
      type: "pc",
    },
    {
      icon: <img src="/assets/icons/tablet.svg" height={27} alt="down" style={{ cursor: "pointer" }} onClick={updateToTablet} />,
      endPoint: "1023",
      startPoint: "768",
      type: "tablet",
    },
    {
      icon: <img src="/assets/icons/phone.svg" height={27} alt="down" style={{ cursor: "pointer" }} onClick={updateToIphone} />,
      endPoint: "767",
      startPoint: "0",
      type: "phone",
    },
  ];

  // const handleUpdateSchema = () => {
  //   dispatch(websitesActions[templateNum - 1].updateSchema(initalStateWebsites[templateNum - 1]));
  // };
  return isGenerating ? (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-70 z-50 flex items-center justify-center">
      <div className="p-5 bg-red-900 rounded-lg shadow-lg">
        <p className="text-lg text-white">{waitingMsg}</p>
      </div>
    </div>
  ) : (
    <div className="flex-center gap-5 bg-1A2345 text-white  h-14 relative">
      {devices.map((device) => {
        const showControllers = viewportWidth >= 1024;
        const isActive = screen === device.type;
        return showControllers ? (
          <div key={device.endPoint} className={isActive ? "bg-blue-500 p-1 rounded-sm w-10 h-10 flex-center" : "w-10 h-10 flex-center"}>
            {device.icon}
          </div>
        ) : (
          ""
        );
      })}
      <div className="absolute right-6">
        {/* <div className="flex"> */}
        <button className="bg-blue-500 px-4 rounded-lg h-10 flex-center" onClick={handleSubmit}>
          {pathname.includes("edit-zweb") ? "Update" : "Save"}
        </button>
        {/* <button onClick={handleUpdateSchema}>Update Schema</button>
        </div> */}
      </div>
    </div>
  );
};

export default TopSide;
