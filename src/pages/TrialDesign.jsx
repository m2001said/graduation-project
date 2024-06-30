// TrialDesign.jsx (generic)
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialTemplate } from "../features/templateData/templateSlice";

const TrialDesign = ({ componentMapping, FooterComponent, NavbarComponent, HeroComponent, template }) => {
  const dispatch = useDispatch();
  const url = useLocation();
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  const templateId = id ? id.split("/")[0] : null;
  const [templateData, setTemplateData] = useState(null);

  let state = useSelector((state) => {
    if (url.pathname.includes("own-page")) {
      return state.ownTemplate;
    } else {
      // return state[template];
      return state.template1;
    }
  });

  useEffect(() => {
    dispatch(fetchInitialTemplate(template));
    console.log(`state in TrialDesign after fetchInitialTemplate${template}`, state);
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://websitebuilderbackend-production-716e.up.railway.app/page/${templateId}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setTemplateData(res.data);
        document.documentElement.style = "";
        for (let index = 0; index < res.data.colors.templateColors.length; index++) {
          document.documentElement.style.setProperty(`--website-color-${index + 1}`, res.data.colors.templateColors[index]);
        }
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };

    if (templateId) {
      if (!url.pathname.includes("edit")) {
        document.getElementById("main-nav").style.display = "none";
        document.getElementById("template-container").style.marginTop = "0px";
      }

      if (url.pathname.includes("zweb") && !url.pathname.includes("edit-zweb")) {
        fetchData();
      }
    } else {
      document.documentElement.style = "";
      for (let index = 0; index < state.colors.templateColors.length; index++) {
        document.documentElement.style.setProperty(`--website-color-${index + 1}`, state.colors.templateColors[index]);
      }
    }
  }, []);

  if (url.pathname.includes("zweb") && !url.pathname.includes("edit-zweb")) {
    state = templateData;
  }
  const reorderedComponents = state && Object.keys(state);

  console.log(state);
  return state.templateInfo.id === template ? (
    <>
      {/* Render Navbar component */}
      {NavbarComponent && <NavbarComponent template={state} />}
      {/* Render Hero component */}
      {HeroComponent && <HeroComponent template={state} />}
      {/* Render components based on mapping */}

      {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} template={state} />;
      })}
      {/* Render footer component */}
      {FooterComponent && <FooterComponent template={state} />}
    </>
  ) : (
    <div className="fixed top-0 left-0 w-full h-full d-flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default TrialDesign;
