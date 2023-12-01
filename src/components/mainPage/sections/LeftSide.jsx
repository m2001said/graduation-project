import React, { useState } from "react";
import {  HeroController, TestimonialController } from "../controllers";

const LeftSide = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div className="bg-white h-screen w-60 flex flex-col ">
          <div className="p-4 bg-7A4179">
            <div className="flex-between " onClick={() => setOpen(!open)}>
              <h3 className="body-bold  cursor-pointer">Update Sections</h3>
              <img src="/assets/icons/goLeft.svg" alt="img"  style={{borderRadius:"2px" , cursor:"pointer"}} />
            </div>
          </div>
          <HeroController />
          <TestimonialController />
        </div>
      ) : (
        <div className="bg-1A2345 w-45 h-80 rounded-tr-full rounded-br-full flex-center  p-2 cursor-pointer " onClick={() => setOpen(!open)}>
          <img src="/assets/icons/goRight.svg" alt="img" width={23}  style={{ cursor:"pointer" , paddingRight:"5px"}} />

        </div>
      )}
    </>
  );
};

export default LeftSide;
