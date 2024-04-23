import React from "react";
import { useSelector } from "react-redux";

const About13 = () => {
  const about = useSelector((state) => state.template13.about); // Assuming 'about' is correctly set in Redux state

  return (
    <div id="about13" className="relative overflow-hidden bg-[var(--c616161)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--color-darkG-13)] absolute -bottom-7 -left-[30px]-right-[30px] py-3 px-[30px] rounded-[50%]"></div>

      <div className="xl:w-[1200px] mx-auto px-3 pt-8">
        <section className="relative">
          <p className="text-center text-[var(--color-13-yel)]">{about.subtitle}</p>
          <h1 className="text-center text-[var(--green-13)] lg:text-5xl text-xl primary-font">
            {about.heading} <br /> <span className="underline decoration-[var(--color-13-yel)]">{about.headingCont}</span>
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-8">
            {about.icons &&
              about.icons.map((icon) => (
                <span key={icon.id} className="bg-[var(--c616161)] py-8 px-6 hover:bg-[var(--white-13)] hover:text-[var(--color-13-yel)]">
                  <img src={icon.icon} className="w-10 text-5xl hover:bg-[var(--color-13-yel)]" alt={icon.title} />
                  <p className="text-xl text-[var(--green-13)] primary-font font-semibold py-8 pb-4">{icon.title}</p>{" "}
                  <p className="text-[var(--color-darkG-13)]">{icon.description}</p>
                </span>
              ))}
          </div>

          <div className="flex justify-between items-center relative mt-12 lg:p-8">
            <div className="flex justify-center">
              <img src={about.image} alt={about.heading} className="lg:w-80 w-80" />
            </div>
            <div className="lg:w-1/2 lg:py-0 py-20">
              <p className="text-[var(--color-13-yel)]">{about.heading}</p>
              <h1 className="text-[var(--green-13)] lg:text-5xl text-xl primary-font font-semibold pt-4 pb-6">
                {about.heading} <span className="underline decoration-[#fdca51]">{about.headingCont}</span>
              </h1>
              <p className="text-[var(--color-darkG-13)] leading-8">{about.subtitle2}</p>
              <div className="flex items-center lg:gap-x-8 py-8">
                <button className="rounded-full flex-row px-4 py-2 flex items-center text-sm bg-[var(--color-13-yel)] gap-2 transition ease-out duration-300 transform hover:scale-110">
                  <p className="text-[var(--color-darkG-13)]">Read more</p>
                  <img src={about.arrowRight} className="w-10 text-xl" alt="Read more" />
                </button>
                <button className="rounded-full px-4 py-2 flex items-center flex-row text-sm text-[white] gap-2 transition ease-out duration-300 transform hover:scale-110">
                  <p className="text-[var(--green-13)]">View Projects</p>
                  <img src={about.arrowRight} className="w-10 text-xl" alt="View Projects" />
                </button>
              </div>
              <div className="flex justify-between pt-4 lg:gap-0 gap-2">
                <span className="flex flex-col justify-center items-center">
                  <h1 className="text-[var(--green-13)] primary-font text-4xl font-semibold">{about.experience}</h1>
                  <p className="w-1/2 lg:text-base text-sm text-[var(--color-darkG-13)]">Years of experience</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                  <h1 className="text-[var(--green-13)] primary-font text-4xl font-semibold">{about.projects}</h1>
                  <p className="w-1/2 lg:text-base text-sm text-[var(--color-darkG-13)]">Projects completed</p>
                </span>
                <span className="flex flex-col justify-center items-center">
                  <h1 className="text-[var(--green-13)] primary-font text-4xl font-semibold">{about.awards}</h1>
                  <p className="w-1/2 lg:text-base text-sm text-[var(--color-darkG-13)]">Awards gained</p>
                </span>
              </div>
            </div>
            {/* Repeated arrow images */}
            {[1, 2, 3, 4].map((index) => (
              <img
                key={index}
                src={about.arrow}
                className="text-[var(--color-13-yel)] text-4xl absolute top-0 left-0 rotate-[315deg] w-10"
                alt={`Arrow ${index}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About13;
