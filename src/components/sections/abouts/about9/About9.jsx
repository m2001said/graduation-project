import React from "react";

const About9 = ({ template }) => {
  const about = template.about;

  return (
    <main className="relative overflow-hidden bg-gradient-to-r from-[var(--website-9-color-1)] to-[var(--website-9-color-3)]">
      {/* Background Image with Animation */}
     
      
      {/* Content */}
      <div className="container mx-auto lg:flex px-3 mb-12   pt-20 about-9 relative">
        <div className="lg:w-2/5 " >
          <div className="bg-[var(--website-9-color-1)] shadow-2xl px-4 py-6 rounded-3xl  items-start gap-x-3 lg:w-4/5 mt-6">
          <p className="text-[var(--website-9-color-3)] md:text-xl text-lg font-medium">{about.title}</p>
          <h1 className="lg:text-4xl text-2xl text-[var(--website-9-color-3)] font-medium py-3">{about.description}</h1>
          </div><div className="lg:block">
            <div className="bg-[var(--website-9-color-1)] shadow-2xl px-4 py-6 rounded-3xl flex items-start gap-x-3 lg:w-4/5 mt-6">
              <button>
                <img
                  src={about.icon.imgUrl}
                  alt=""
                  className="m-auto bg-transparent hover:bg-[var(--icon-hover-color)] active:bg-[var(--icon-active-color)] w-12"
                />
              </button>
              <div className="flex flex-col">
                <h1 className="text-[var(--website-9-color-3)] text-lg font-medium">{about.icon.linkText}</h1>
                <p className="text-[var(--website-9-color-3)]">{about.icon.text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]">
          <img
            src={about.imgs[0]}
            alt=""
            className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover"
          />
          <div className="w-1/2 h-4/5 flex flex-col gap-4 relative -top-20">
            <img
              src={about.imgs[1]}
              alt=""
              className="w-full h-3/5 rounded-3xl shadow-md object-cover"
            />
            <img
              src={about.imgs[2]}
              alt=""
              className="w-full h-2/5 rounded-3xl shadow-md object-cover"
            />
            <button className="bg-gradient-to-r from-[var(--website-9-color-6)] to-[var(--website-9-color-1)] rounded-full h-12 w-12 cursor-auto absolute -bottom-8 left-16"></button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About9;
