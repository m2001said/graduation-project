import React, { useState } from "react";
// import { useSelector } from "react-redux";
import AllControllers from "../controllers/AllControllers";
import ColorController from "../controllers/ColorController";
const LeftSide = ({ targetTemplate, updateAllRef }) => {
  const [showLeftSide, setShowLeftSide] = useState(true);
  const handleClick = () => {
    setShowLeftSide(!showLeftSide);
  };

  const sections = Object.keys(targetTemplate);
  sections.sort((a, b) => {
    if (a === "navbar") {
      return -1; // 'navbar' comes before anything else
    }
    if (b === "navbar") {
      return 1; // Anything else comes after 'navbar'
    }
    if (a === "hero") {
      return -1; // 'hero' comes before anything else except 'navbar'
    }
    if (b === "hero") {
      return 1; // Anything else comes after 'hero' except 'navbar'
    }
    if (a === "colors") {
      return 1; // 'colors' comes after anything else
    }
    if (b === "colors") {
      return -1; // Anything else comes before 'colors'
    }
    if (a === "footer") {
      return 1; // 'footer' comes after anything else
    }
    if (b === "footer") {
      return -1; // Anything else comes before 'footer'
    }

    return 0; // No change if both are the same or not 'navbar', 'hero', or 'footer'
  });
  let stopCheckFirst = true;
  return showLeftSide ? (
    <div className="max-md:w-full flex-auto w-60 pb-6 bg-white md:overflow-y-auto md:overflow-x-hidden dashboard-subContainer" style={{ minWidth: "250px" }}>
      <div className="update-controller">
        <div className="flex-between cursor-pointer" onClick={handleClick}>
          <h3 className="body-bold  cursor-pointer uppercase">edit sections</h3>
          <img src="/assets/icons/goLeft.svg" width={18} alt="down" />
        </div>
      </div>
      {sections.map((section, index) => {
        let isFixed = false;
        let isFirst = false;
        let isLast = false;
        if (section === "navbar" || section === "hero" || section === "footer") {
          isFixed = true;
        }
        if (stopCheckFirst && ((index === 0 && !isFixed) || (index === 1 && !isFixed) || (index === 2 && !isFixed))) {
          isFirst = true;
          stopCheckFirst = false;
        }
        if (sections[index + 1] === "footer" || sections[index + 1] === "colors") {
          isLast = true;
        }

        if (section === "templateInfo") return null;
        if (section === "colors") return <ColorController key={section} colors={targetTemplate.colors} updateAll={updateAllRef} />;
        else
          return (
            <AllControllers
              controllerSection={section}
              targetTemplate={targetTemplate}
              key={section}
              updateAll={updateAllRef}
              isFixed={isFixed}
              isFirst={isFirst}
              isLast={isLast}
            />
          );
      })}
    </div>
  ) : (
    <div className="absolute top-3 left-4 bg-white rounded-sm p-1 flex-center cursor-pointer" onClick={handleClick}>
      <p className="font-bold white mr-1">Open Dashboard</p>
      <img src="/assets/icons/down.svg" width={18} alt="down" />
    </div>
  );
};

export default LeftSide;
