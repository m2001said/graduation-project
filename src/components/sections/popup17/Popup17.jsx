import React from "react";
import{ useSelector} from "react-redux";
import PropTypes from 'prop-types';


const Popup = ({ showPopup, setShowPopup }) => {
  const popup = useSelector((state) => state.template17.popup);
  return (
    <>
      {showPopup && (
        <div>
          <div
            className="h-screen w-screen fixed top-0
            left-0 bg-black/50 backdrop-blur-sm"
          >
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 p- shadow-md 
             bg-[var(--color17-white)] rounded-md duration-200 w-[300px] z-20"
            >
              {/* header section  */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[var(--color17-dark)]">{popup.title}</h1>
                </div>
                <div>
                  <img  className="text-2xl cursor-pointer logo-17" src={popup.closeIcon}
                   
                    onClick={() => setShowPopup(false)}
                  />
                </div>
              </div>

              {/* Login form section  */}
              <div className="mt-4 z-20">
                <input
                  type="email"
                  placeholder="Enter email "
                  className="w-full rounded-md border border-gray-300
                 dark:border-gray-500 px-2 py-1 mb-4 "
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-md border
                  border-gray-300
                  dark:border-gray-500 px-2"
                />

                {/* login button section  */}
                <div>
                  <button
                    className="w-full bg-primary text-[var(--color17-white)] 
                  px-3 p-2 rounded-md"
                    onClick={() => setShowPopup(false)}
                  >
{popup.buttonTitle}                  </button>
                </div>

                {/* social login  */}
                <div className="mt-4">
                  <p className="text-center">{popup.other}</p>
                  <div className="flex justify-center gap-2 
                  mt-2">
                    <img src={popup.fbIcon} className="text-3xl  
                    duration-200 icon-17" />
                    <img src={popup.googleIcon} className="text-3xl
                     duration-200 icon-17" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
Popup.propTypes = {
  showPopup: PropTypes.bool.isRequired, // Ensure `showPopup` is a boolean and required
  setShowPopup: PropTypes.func.isRequired, // Ensure `setShowPopup` is a function and required
};


export default Popup;
