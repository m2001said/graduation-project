import React from "react";
import { useSelector } from "react-redux";

const OrderPopup10 = ({ orderPopup, setOrderPopup }) => {
  const { orderPopup10 } = useSelector((state) => state.template10);
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Head */}
            <div className="flex items-center justify-between">
              <div>
                <h1>{orderPopup10.title}</h1>
              </div>
              <div>
                <img src={orderPopup10.icon} alt="" className="w-4 cursor-pointer " onClick={() => setOrderPopup(false)} />
              </div>
            </div>
            {/* body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button className="btnBg btnTxt hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">{orderPopup10.buttonText}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup10;
