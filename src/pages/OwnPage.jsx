import React, { useEffect, useState } from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";
import axios from "axios";
import Loader from "../components/Loader/Loader";

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
        console.error(`third pattern failed: ${error.message}`);
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
  console.log("owwwwwwwwwwwwwwwwwwwn page");
  const location = useLocation();
  let ownTemplate = useSelector((state) => state.ownTemplate);
  console.log(ownTemplate);
  let selectedData = location.state || ownTemplate.templateInfo?.selectedSections;
  console.log(selectedData);

  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams.get("id"));
  const userId = useSelector((state) => state.auth.user && state.auth.user._id) || searchParams.get("userId");
  const templateId = searchParams.get("templateId") || null;
  const [templateData, setTemplateData] = useState(null);
  console.log(templateId);

  // const colors = ownTemplate.colors;
  // useEffect(() => {
  //   const styleAttributeValue = document.documentElement.getAttribute("style");
  //   const styleDeclarations = styleAttributeValue?.split(";");
  //   styleDeclarations?.pop();
  //   styleDeclarations?.forEach((declaration, index) => {
  //     const [property, value] = declaration.trim().split(":");
  //     document.documentElement.style.setProperty(property.trim(), colors.templateColors[index]);
  //   });

  //   for (let index = 1; index <= 18; index++) {
  //     for (let i = 0; i < colors?.templateColors.length; i++) {
  //       document.documentElement.style.setProperty(`--website-${index}-color-${i + 1}`, colors?.templateColors[index]);
  //     }
  //   }
  // }, []);

  // edit here

  useEffect(() => {
    // excute in deployment case
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://websitebuilderbackend-production-716e.up.railway.app/page/${userId}/${templateId}`);
        // until edit in back end
        const schema = {
          ...res.data,
          templateInfo: {
            id: 1,
            title: "Unique Homes",
            description: "Explore diverse design and project updates for personalized living.",
            imgUrl: "/static/media/design1.02d5c4e3717cab54eb4f.jpg",
            selectedSections: {
              navbarIndexSelected: 4,
              heroIndexSelected: 2,
              featuresIndexSelected: 1,
              projectsIndexSelected: 1,
              servicesIndexSelected: 1,
              contactIndexSelected: 1,
              teamIndexSelected: 1,
              testimonialsIndexSelected: 1,
              statisticsIndexSelected: 1,
              logosIndexSelected: 1,
              itemsIndexSelected: 1,
              pricingIndexSelected: 1,
              ctaIndexSelected: 1,
              footerIndexSelected: 3,
            },
          },
        };

        console.log(schema);

        setTemplateData(schema);
        document.documentElement.style = "";
        for (let index = 1; index <= 18; index++) {
          for (let i = 0; i < res.data.colors?.templateColors.length; i++) {
            document.documentElement.style.setProperty(`--website-${index}-color-${i + 1}`, res.data.colors?.templateColors[i]);
          }
        }
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };
    console.log(templateId);
    if (templateId) {
      if (!location.pathname.includes("edit")) {
        document.getElementById("main-nav").style.display = "none";
        document.getElementById("template-container").style.marginTop = "0px";
      }

      if (location.pathname.includes("zweb") && !location.pathname.includes("edit-zweb")) {
        fetchData();
      }
    } else {
      const colors = ownTemplate.colors;
      // const styleAttributeValue = document.documentElement.getAttribute("style");
      // const styleDeclarations = styleAttributeValue?.split(";");
      // styleDeclarations?.pop();
      // styleDeclarations?.forEach((declaration, index) => {
      //   const [property, value] = declaration.trim().split(":");
      //   document.documentElement.style.setProperty(property.trim(), colors?.templateColors[index]);
      // });

      for (let index = 1; index <= 18; index++) {
        for (let i = 0; i < colors?.templateColors.length; i++) {
          document.documentElement.style.setProperty(`--website-${index}-color-${i + 1}`, colors?.templateColors[i]);
        }
      }
    }
  }, []);

  if (location.pathname.includes("zweb") && !location.pathname.includes("edit-zweb")) {
    ownTemplate = templateData;
  }

  ////////////

  const reorderedComponents = ownTemplate && Object.keys(ownTemplate);
  const renderComponent = (type, index) => {
    const Component = importComponent(type, index);
    return Component ? <Component key={`${type}-${index}`} /> : null;
  };

  const sectionNames = [
    "navbar",
    "hero",
    "features",
    "projects",
    "services",
    "contact",
    "team",
    "testimonials",
    "statistics",
    "logos",
    "items",
    "pricing",
    "cta",
    "footer",
  ];
  const sectionTypes = [
    "navbar",
    "hero",
    "feature",
    "project",
    "service",
    "contact",
    "team",
    "testimonial",
    "statistic",
    "logo",
    "item",
    "pricing",
    "cta",
    "footer",
  ];

  // this function for render components in right order based on changes of user
  let renderOrderedComponents = reorderedComponents?.map((section) => {
    for (let index = 0; index < sectionTypes.length; index++) {
      const element = sectionTypes[index];
      if (section.startsWith(element)) {
        return { type: sectionTypes[index], index: index };
      }
    }
    return null;
  });
  console.log(renderOrderedComponents);
  renderOrderedComponents = renderOrderedComponents?.filter((element) => {
    return element !== null;
  });

  // renderOrderedComponents.pop();

  console.log(renderOrderedComponents);
  removeEmptyArrays(ownTemplate);
  console.log(ownTemplate);
  console.log(templateId)

  return ownTemplate ? (
    templateId ? (
      <>{renderOrderedComponents.map((element) => renderComponent(element.type, selectedData[`${sectionNames[element.index]}IndexSelected`]))}</>
    ) : (
      <>
        <section className="dashboard-container mx-auto relative">
          <TopSide schema={ownTemplate} />
          <div className="w-full flex-between flex-col md:flex-row dashboard-subContainer overflow-hidden">
            <LeftSide targetTemplate={ownTemplate} updateAllRef={ownTemplateActions} />
            <div className="max-md:w-full md:w-70 flex-auto  flex justify-start flex-col items-center text-black p-2" style={{ height: "calc(100vh - 56px)" }}>
              <div className="w-full border border-slate-300 shadow  md:rounded-tl-3xl md:rounded-bl-3xl  mb-2 overflow-y-auto overflow-x-hidden  mx-2 md:mx-4 md:self-start md:ml-1 relative">
                {renderOrderedComponents.map((element) => renderComponent(element.type, selectedData[`${sectionNames[element.index]}IndexSelected`]))}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  ) : (
    <>
      <div className="designs-section flex items-center justify-center">
        <Loader />
      </div>
    </>
  );
};

export default OwnPage;
