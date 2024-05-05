import React from "react";
import { useSelector } from "react-redux";

const About13 = () => {
  const about = useSelector((state) => state.template13.about);

  return (
    <div id="about13" className="relative overflow-hidden bg-[var(--website-13-color-6)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--website-13-color-1)] absolute -bottom-7 -left-[30px]-right-[30px] py-3 px-[30px] rounded-[50%]"></div>

      <div className="xl:w-[1200px] mx-auto px-3 pt-8">
        <section className="relative">
          <div className="flex flex-col lg:flex-row justify-between items-center relative mt-12 lg:p-8">
            <div className="flex justify-center lg:order-2 mb-8 lg:mb-0">
              <img src={about.imgUrl} alt={about.title} className="lg:w-80 w-80" />
            </div>
            <div className="lg:w-1/2">
              <p className="text-[var(--website-13-color-4)] text-center lg:text-left">{about.title}</p>
              <h1 className="text-[var(--website-13-color-2)] lg:text-5xl text-xl primary-font font-semibold pt-4 pb-6 text-center lg:text-left">
                {about.subtitles[0].title} <span className="underline decoration-[var(--website-13-color-4)]">{about.subtitles[1].title}</span>
              </h1>
              <p className="text-[var(--website-13-color-1)] leading-8 text-center lg:text-left">{about.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start mt-8">
                {about.buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    className={`rounded-full flex-row px-4 py-2 flex items-center text-sm bg-[var(--website-13-color-4)] gap-2 transition ease-out duration-300 transform hover:scale-110 ${
                      index !== about.buttons.length - 1 ? "mr-2 mb-2" : "mb-2"
                    }`}
                  >
                    <p className="text-[var(--website-13-color-1)]">{button.title}</p>
                    <img src={button.icon} className="w-6" alt={button.title} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Wrapped smaller section */}
          <div className="lg:hidden mt-12 p-8">
            {about.infos.map((info, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <h1 className="text-[var(--website-13-color-2)] primary-font text-3xl font-semibold">{info.description}</h1>
                <p className="text-sm text-[var(--website-13-color-1)]">{info.title}</p>
              </div>
            ))}
          </div>
          {/* Regular section for larger devices */}
          <div className="hidden lg:flex justify-between mt-12 lg:p-8">
            {about.infos.map((info, index) => (
              <div key={index} className="flex flex-col items-center">
                <h1 className="text-[var(--website-13-color-2)] primary-font text-4xl font-semibold">{info.description}</h1>
                <p className="lg:text-base text-sm text-[var(--website-13-color-1)]">{info.title}</p>
              </div>
            ))}
          </div>
          {/* Repeated arrow images */}
          {[1, 2, 3, 4].map((index) => (
            <img
              key={index}
              src={about.icons[1].icon}
              className="text-[var(--website-13-color-4)] text-4xl absolute top-0 left-0 rotate-[315deg] w-10"
              alt={`Arrow ${index}`}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default About13;
