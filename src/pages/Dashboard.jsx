import React, { useEffect } from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import RightSide from "../components/dashboard/sections/RightSide";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialTemplate } from "../features/templateData/templateSlice";
import { useLocation } from "react-router";
import { templateActions1 } from "../features/templateData/templateSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const url = useLocation();
  const { pathname } = useLocation();
  const regex = /\d+/;
  const templateId = pathname.match(regex)[0];
  const state = useSelector((state) => state.template1);
  console.log("templateId in Dashboard", templateId);
  console.log("state in Dashboard", state);

  useEffect(() => {
    if (url.pathname.includes("preview") || url.pathname.includes("build")) {
      dispatch(fetchInitialTemplate(templateId));
      console.log(`state in TrialDesign after fetchInitialTemplate${templateId}`, state);
    }
  }, [dispatch]);

  return (
    <section className="dashboard-container mx-auto relative">
      <TopSide schema={state} />
      <div className="w-full flex-between flex-col md:flex-row dashboard-subContainer overflow-hidden">
        <LeftSide targetTemplate={state} updateAllRef={templateActions1} />
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
