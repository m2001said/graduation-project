import React from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";

const Teams10 = () => {
  const { teams } = useSelector((state) => state.template10);
  return (
    <>
      <div className="pt-10">
        <div className="items-center p-7 sm:p-30">
          {/* head sec */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="smHeader text-sm bg-clip-text text-transparent">{teams.smTitle}</p>
            <h1 className="text-3xl font-bold">{teams.title}</h1>
            <p className="text-xs text-gray-400">{teams.description}</p>
          </div>
          {/* card sec */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {teams.cards.map((data) => (
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
              <button className="text-center mt-10 cursor-pointer  btnBg btnTxt py-1 px-5 rounded-full">{teams.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams10;
