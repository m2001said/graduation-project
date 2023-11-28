import React, { useState, useEffect } from "react";
import { MdComputer } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateScreen } from "../../../features/screen/screenSlice";

const TopSide = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const screen = useSelector((state) => state.screen);
  const dispatch = useDispatch();

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

  const devices = [
    {
      icon: <MdComputer fontSize={30} cursor={"pointer"} onClick={updateToPC} />,
      endPoint: "5000",
      startPoint: "1024",
      type: "pc",
    },
    {
      icon: <FaTabletAlt fontSize={22} cursor={"pointer"} onClick={updateToTablet} />,
      endPoint: "1023",
      startPoint: "768",
      type: "tablet",
    },
    {
      icon: <MdPhoneIphone fontSize={24} cursor={"pointer"} onClick={updateToIphone} />,
      endPoint: "767",
      startPoint: "0",
      type: "phone",
    },
  ];

  return (
    <div className="flex-center gap-5 bg-1A2345 text-white py-2 h-12">
      {devices.map((device) => {
        const showControllers = viewportWidth >= 1024;
        const isActive = screen === device.type;
        return showControllers ? (
          <div key={device.endPoint} className={isActive ? "bg-blue-500 p-1 rounded-sm" : ""}>
            {device.icon}
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default TopSide;
