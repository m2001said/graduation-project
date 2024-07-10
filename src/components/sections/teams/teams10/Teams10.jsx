import React from "react";
import "../../../../assets/css/globals10.css";
import { useSelector } from "react-redux";

const Teams10 = ({ template }) => {
  const ownTeam= useSelector((state) => state.ownTemplate.team);
  const team = template ? template.team : ownTeam;
  return (
    <>
      <div className="pt-10 bg-[--website-10-color-2] dark:bg-gray-900 dark:text-white">
        <div className="items-center p-7 sm:p-30">
          {/* head sec */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="smHeader10 text-sm bg-clip-text text-transparent">{team.subtitle}</p>
            <h1 className="text-3xl font-bold">{team.title}</h1>
            <p className="text-xs text-gray-400">{team.description}</p>
          </div>
          {/* card sec */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {team.members.map((data, index) => (
                <div className="space-y-3" key={index}>
                  <img src={data.imgUrl} alt="" className="h-[220px] w-[150px] object-cover rounded-md " />
                  <div>
                    <h2 className="font-semibold">{data.title}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">{data.name}</p>
                    <div className="flex items-center gap-1">
                      <img src={data.icon} alt="" className="w-6" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  btnBg10 btnTxt10 py-1 px-5 rounded-full">{team.buttonText}</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams10;
