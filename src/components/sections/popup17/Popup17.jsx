import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const Popup = ({ showPopup, setShowPopup }) => {
  const popup = useSelector((state) => state.template17.popup);

  return (
    <>
      {showPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-[var(--website-17-color-4)]backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p- shadow-md bg-[var(--website-17-color-1)] rounded-md duration-200 w-[300px] z-20">
              {/* header section */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[var(--website-17-color-4)]">{popup.title}</h1>
                </div>
                <div>
                  <img
                    className="text-2xl cursor-pointer logo-17"
                    src="https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png"
                    onClick={() => setShowPopup(false)}
                    alt="Close Icon"
                  />
                </div>
              </div>

              {/* Login form section */}
              <div className="mt-4 z-20 px-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-md border border-[var(--website-17-color-4)] dark:border-[var(--website-17-color-6)] px-2 py-1 mb-4"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-md border border-[var(--website-17-color-4)] dark:border-[var(--website-17-color-6)] px-2"
                />

                {/* Login button section */}
                <div className="pt-2 px-4">
                  <button
                    className=" w-full h-auto bg-[var(--website-17-color-3)] text-dark px-3  rounded-md" // Changed padding here
                    onClick={() => setShowPopup(false)}
                  >
                    {popup.buttonTitle}
                  </button>
                </div>

                {/* Social login */}
                <div className="mt-4">
                  <p className="text-center text-[var(--website-17-color-4)]">{popup.other}</p>
                  <div className="flex justify-center gap-2 mt-2">
                    {popup.icons.map((icon) => (
                      <img
                        key={icon.id}
                        src={icon.icon}
                        alt={icon.name}
                        className="text-3xl duration-200 icon-17 cursor-pointer"
                      />
                    ))}
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
  showPopup: PropTypes.bool.isRequired,
  setShowPopup: PropTypes.func.isRequired,
};

export default Popup;
