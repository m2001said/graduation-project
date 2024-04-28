
import React from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types"; // Import for prop type validation




const About = ({ HandlePopup }) => {
const about = useSelector((state) => state.template17.about);

  const bgStyle = {
    backgroundImage: `url(${about.photo1})`,
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
        <div className="container17 min-h[500px] relative z-1">
          <h1   data-aos='fade'
            className="pt-20 tracking-wider text-4xl font-semibold 
            text-[var(--color17-white)] text-center"
          >
            {about.heading}{" "}
          </h1>
          {/* card section  */}
          <div 
          data-aos='fade'
          data-aos-delay='300'
        className="bg-[var(--color17-light2)] text-[var(--color17-dark)] p-10 my-10 p17">{about.paragraph}</div>
         

          <div className="pt-10 justify-center ">
            <button
              onClick={HandlePopup}
              className="flex justify-center items-center 
            gap-2 bg-[var(--color17-primary)] text-xl
            h-[40px] text-[var(--color17-white)] px-5 py-2 hover:scale-105 duration-300"
            >
              <img src={about.userIcon}className="icon-17" />
              {about.MyAccount}
            </button>
          </div>
        </div>
        {/* wave vector  */}
        <div className="absolute top-0 right-0 w-full">
          <img src={about.vector} className="mx-auto" alt="" />
        </div>
      </div>
    </>
  );
};
About.propTypes = {
  HandlePopup: PropTypes.func.isRequired, // Ensure `HandlePopup` is a function and required
};
export default About;
