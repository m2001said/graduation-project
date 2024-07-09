import React from "react";

const About17 = ({ template }) => {
  const { title, subtitle, imgs,sectionId } = template.about;
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
      <div id={sectionId} style={bgStyle} className="py-56">
        <div className="container17 min-h-[500px] relative z-1">
          <h1
            className="pt-20 tracking-wider text-4xl font-semibold 
            text-[var(--website-17-color-5)] text-center"
          >
            {title}
          </h1>
          {/* card section */}
          <div className="bg-gradient-to-t from-[var(--website-17-color-4)] to-[var(--website-17-color-4)] text-[var(--website-17-color-5)] p-10 my-3 h-auto overflow-hidden rounded-3xl">
            {subtitle}
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
