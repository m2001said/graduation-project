import React from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";
import { useLocation } from "react-router";

const Teams10 = () => {
  const { pathname } = useLocation();
  const team = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.team;
    } else {
      return state.template10.team;
    }
  });
  return (
    <>
      <div className="pt-10 bg-[--white10] dark:bg-gray-900">
        <div className="items-center p-7 sm:p-30">
          {/* head sec */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="smHeader10 text-sm bg-clip-text text-transparent">{team.subtitle}</p>
            <h1 className="text-3xl font-bold">{team.title}</h1>
            <p className="text-xs text-gray-400">{team.description}</p>
          </div>
          {/* card sec */}
          <div>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {team.members.map((data) => (
                <div className="space-y-3">
                  <img src={data.imgUrl} alt="" className="h-[220px] w-[150px] object-cover rounded-md " />
                  <div>
                    <h2 className="font-semibold">{data.title}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">{data.author}</p>
                    <div className="flex items-center gap-1">
                      <img src={data.icon} alt="" className="w-6" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  btnBg10 btnTxt10 py-1 px-5 rounded-full">{team.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams10;
