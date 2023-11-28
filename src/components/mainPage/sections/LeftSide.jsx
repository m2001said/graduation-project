import React, { useState } from "react";
import { NavController, HeroController, TestimonialController, ServicesController, AboutController } from "../controllers";
import { FaAngleRight } from "react-icons/fa6";
import { FaCaretSquareLeft } from "react-icons/fa";

const LeftSide = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div className="bg-white h-screen w-70 flex flex-col ">
          <div className="p-4 bg-blue-800">
            <div className="flex-between " onClick={() => setOpen(!open)}>
              <h3 className="body-bold  cursor-pointer">Update Sections</h3>
              <FaCaretSquareLeft fontSize={23} cursor={"pointer"} />
            </div>
          </div>
          <NavController />
          <HeroController />
          <TestimonialController />
          <AboutController />
          <ServicesController />
        </div>
      ) : (
        <div className="bg-1A2345 w-45 h-80 rounded-tr-full rounded-br-full flex-center  p-2 cursor-pointer " onClick={() => setOpen(!open)}>
          <FaAngleRight fontSize={23} />
        </div>
      )}
    </>
  );
};

export default LeftSide;
