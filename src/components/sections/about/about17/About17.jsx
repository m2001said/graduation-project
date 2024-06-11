import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types"; // Import for prop type validation

const About = ({ HandlePopup }) => {
  const about = useSelector((state) => state.template17.about);

  const bgStyle = {
    backgroundImage: `url(${about.imgs[0].title})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "relative",
  };

  return (
    <>
      <div style={bgStyle} className="py-14">
        <div className="container17 min-h-[500px] relative z-1">
          <h1
            className="pt-20 tracking-wider text-4xl font-semibold 
            text-[var(--website-17-color-4)] text-center"
          >
            {about.title}{" "}
          </h1>
          {/* card section  */}
          <div className="bg-[var(--website-17-color-6)] text-[var(--website-17-color-4)] p-10 my-10 p17">
            {about.subtitle}
          </div>

          <div className="pt-10 justify-center ">
            <button
              onClick={HandlePopup}
              className="flex justify-center items-center 
            gap-2 bg-[var(--website-17-color-1)] text-xl
            h-[40px] text-[var(--website-17-color-4)] px-5 py-2 hover:scale-105 duration-300"
            >
              <img src={about.button[0].icon} className="icon-17" alt="" />
              {about.button[0].title}
            </button>
          </div>
        </div>
        {/* wave vector  */}
        <div className="absolute top-0 right-0 w-full">
          <img src={about.imgs[1].title} className="mx-auto" alt="" />
        </div>
      </div>
    </>
  );
};

About.propTypes = {
  HandlePopup: PropTypes.func.isRequired, // Ensure `HandlePopup` is a function and required
};

export default About;
