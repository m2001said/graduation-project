import React, { useEffect } from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ownTemplateActions } from "../features/templateData/ownTemplateSlice";

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

const OwnPage = () => {
  const location = useLocation();
  const selectedData = location.state || {};
  const ownTemplate = useSelector((state) => state.ownTemplate);

  const colors = ownTemplate.colors;
  useEffect(() => {
    // const styleAttributeValue = document.documentElement.getAttribute("style");
    // const styleDeclarations = styleAttributeValue?.split(";");
    // styleDeclarations?.pop();
    // styleDeclarations?.forEach((declaration, index) => {
    //   const [property, value] = declaration.trim().split(":");
    //   document.documentElement.style.setProperty(property.trim(),  colors.templateColors[index]);
    // });

    // for (let index = 0; index < colors.templateColors.length; index++) {
    //   document.documentElement.style.setProperty(`--color${index + 1}`, colors.templateColors[index]);
    // }
  }, []);

  const reorderedComponents = Object.keys(ownTemplate);
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
    "footer",
  ];

  // this function for render components in right order based on changes of user
  const renderOrderedComponents = reorderedComponents.map((section) => {
    for (let index = 0; index < sectionTypes.length; index++) {
      const element = sectionTypes[index];
      if (section.startsWith(element)) {
        return { type: sectionTypes[index], index: index };
      }
    }
  });
  renderOrderedComponents.pop();
  return (
    <>
      <section className="dashboard-container mx-auto relative">
        <TopSide />
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
  );
};

export default OwnPage;
