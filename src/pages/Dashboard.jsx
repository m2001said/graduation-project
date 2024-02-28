import React, { useEffect } from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import RightSide from "../components/dashboard/sections/RightSide";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { templateActions1 } from "../features/templateData/templateSlice";
import { templateActions2 } from "../features/templateData/templateSlice2";
// import { updateTemplate3 } from "../features/templateData/templateSlice3";
import { templateActions4 } from "../features/templateData/templateSlice4";
import { templateActions5 } from "../features/templateData/templateSlice5";
import { templateActions6 } from "../features/templateData/templateSlice6";
import { updateTemplate7 } from "../features/templateData/templateSlice7";
import { updateTemplate8 } from "../features/templateData/templateSlice8";
import { updateTemplate9 } from "../features/templateData/templateSlice9";
import { updateTemplate10 } from "../features/templateData/templateSlice10";
import { updateTemplate11 } from "../features/templateData/templateSlice11";
import { updateTemplate12 } from "../features/templateData/templateSlice12";
import { updateTemplate13 } from "../features/templateData/templateSlice13";
import { updateTemplate14 } from "../features/templateData/templateSlice14";
import { updateTemplate15 } from "../features/templateData/templateSlice15";
import { updateTemplate16 } from "../features/templateData/templateSlice16";
import { updateTemplate17 } from "../features/templateData/templateSlice17";
import { updateTemplate18 } from "../features/templateData/templateSlice18";

const Dashboard = () => {
  const { pathname } = useLocation();
  const regex = /\d+/;
  const templateId = pathname.match(regex)[0];
  const template = useSelector((state) => state[`template${templateId}`]);
  let updateAllRef;
  switch (templateId) {
    case "1":
      updateAllRef = templateActions1;
      break;
    case "2":
      updateAllRef = templateActions2;
      break;
    // case "3":
    //   updateAllRef = templateActions3;
    //   break;
    case "4":
      updateAllRef = templateActions4;
      break;
    case "5":
      updateAllRef = templateActions5;
      break;
    case "6":
      updateAllRef = templateActions6;
      break;
    case "7":
      updateAllRef = updateTemplate7;
      break;
    case "8":
      updateAllRef = updateTemplate8;
      break;
    case "9":
      updateAllRef = updateTemplate9;
      break;
    case "10":
      updateAllRef = updateTemplate10;
      break;
    case "11":
      updateAllRef = updateTemplate11;
      break;
    case "12":
      updateAllRef = updateTemplate12;
      break;
    case "13":
      updateAllRef = updateTemplate13;
      break;
    case "14":
      updateAllRef = updateTemplate14;
       break;
    case "15":
      updateAllRef = updateTemplate15;
       break;
    case "16":
      updateAllRef = updateTemplate16;
       break;
    case "17":
      updateAllRef = updateTemplate17;
       break;
    case "18":
      updateAllRef = updateTemplate18;
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
