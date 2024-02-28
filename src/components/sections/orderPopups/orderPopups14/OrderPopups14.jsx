import React from "react";
import { useSelector } from "react-redux";


const Popup14 = ({ orderPopup, handleOrderPopup }) => {

  const { order } = useSelector((state) => state.template14);

  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              {/* header */}
              <div className="flex items-center justify-between">
                <h1>{order.title}</h1>
                <div>
                  <img src={order.icon} alt="" className="w-4 cursor-pointer " onClick={handleOrderPopup} />
                </div>
              </div>

              {/* Form sec */}
              <div className="mt-4">
                <input type="text" placeholder="Name" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" />
                <input type="text" placeholder="Address" className="form-input" />
                <div className="flex justify-center">
                  <button
                    onClick={handleOrderPopup}
                    className={`bg-[--primary14-color] text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
                  >
                    {order.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup14;
