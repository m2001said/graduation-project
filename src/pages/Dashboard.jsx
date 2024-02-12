import React, { useEffect } from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import RightSide from "../components/dashboard/sections/RightSide";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { updateTemplate1 } from "../features/templateData/templateSlice";
import { updateTemplate2 } from "../features/templateData/templateSlice2";
import { updateTemplate3 } from "../features/templateData/templateSlice3";
import { updateTemplate4 } from "../features/templateData/templateSlice4";
import { updateTemplate5 } from "../features/templateData/templateSlice5";
import { updateTemplate6 } from "../features/templateData/templateSlice6";
import { updateTemplate7 } from "../features/templateData/templateSlice7";
import { updateTemplate11 } from "../features/templateData/templateSlice11";

const Dashboard = () => {
  const { pathname } = useLocation();
  const regex = /\d+/;
  const templateId = pathname.match(regex)[0];
  const template = useSelector((state) => state[`template${templateId}`]);
  let updateAllRef;
  switch (templateId) {
    case "1":
      updateAllRef = updateTemplate1;
      break;
    case "2":
      updateAllRef = updateTemplate2;
      break;
    case "3":
      updateAllRef = updateTemplate3;
      break;
    case "4":
      updateAllRef = updateTemplate4;
      break;
    case "5":
      updateAllRef = updateTemplate5;
      break;
    case "6":
      updateAllRef = updateTemplate6;
      break;
    case "7":
      updateAllRef = updateTemplate7;
      break;
    case "11":
      updateAllRef = updateTemplate11;
      break;
    default:
      break;
  }

  const screen = useSelector((state) => state.screen);
  const colors = template.colors;

  useEffect(() => {
    for (let index = 0; index < colors.templateColors.length; index++) {
      document.documentElement.style.setProperty(`--website-color-${index + 1}`, colors.templateColors[index]);
    }
  }, []);

  return (
    <section className="dashboard-container mx-auto relative">
      <TopSide />

      <div className="w-full flex-between flex-col md:flex-row dashboard-subContainer overflow-hidden">
        <LeftSide targetTemplate={template} updateAllRef={updateAllRef} />
        <div className="max-md:w-full md:w-70 flex-auto  flex justify-start flex-col items-center text-black p-2" style={{ height: "calc(100vh - 56px)" }}>
          <div className="w-full border border-slate-300 shadow  md:rounded-tl-3xl md:rounded-bl-3xl  mb-2 overflow-y-auto overflow-x-hidden  mx-2 md:mx-4 md:self-start md:ml-1 relative">
            <RightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

// this is the solution for design5 (elsayed)

//  <section className="dashboard-container mx-auto relative">
//       {/*here */}
//       <TopSide />

//       {/*this is the solution for aos li */}
//       <div className="w-full flex-between flex-col md:flex-row dashboard-subContainer ">
//         <LeftSide />
//            <RightSide />

//       </div>
//     </section>
