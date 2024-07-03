import React from "react";

const About17 = ({ template }) => {
  const { title, subtitle, imgs, buttonText, buttonIcon } = template.about;
  const bgStyle = {
    backgroundImage: `url(${imgs[0]})`,
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
            {title}
          </h1>
          {/* card section */}
          <div className="bg-[var(--website-17-color-6)] text-[var(--website-17-color-4)] p-10 my-10 p17">
            {subtitle}
          </div>

          <div className="pt-10 justify-center">
            <button
              className="flex justify-center items-center 
              gap-2 bg-[var(--website-17-color-1)] text-xl
              h-[40px] text-[var(--website-17-color-4)] px-5 py-2 hover:scale-105 duration-300"
            >
              <img src={buttonIcon} className="icon-17" alt="" />
              {buttonText}
            </button>
          </div>
        </div>
        {/* wave vector */}
        <div className="absolute top-0 right-0 w-full">
          <img src={imgs[1]} className="mx-auto" alt="" />
        </div>
      </div>
    </>
  );
};

export default About17;
