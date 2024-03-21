import React from "react";
import { useSelector } from "react-redux";

const About13 = () => {
  const about1 = useSelector((state) => state.template13.about1);
  const about2 = useSelector((state) => state.template13.about2);

  return (
    <div id="about13" className="relative overflow-hidden bg-[var(--fff6ed)] lg:py-20 py-8">
      <div className="h-[50px] bg-[var(--color-13-green)] absolute -bottom-7 -left-[30px]-right-[30px] py-3 px-[30px] rounded-[50%]"></div>

      <div className="xl:w-[1200px] mx-auto px-3 pt-8">
        <section className="relative">
          <p className="text-center text-[var(--fb7a3f)]">{about1.title}</p>
          <h1 className="text-center text-[var(--green-13)] lg:text-5xl text-xl primary-font">
            {about1.subtitle} <br /> {""}
            <span className="underline decoration-[var(--color-13-y)]"> {about1.subdecorated}</span>
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 pt-8">
            <span className="bg-[var(--fffaf4)] py-8 px-6 hover:bg-[var(--[white]-13)] hover:text-[var(--fb7a3f)]">
              <img src={about1.icon1} FourFill className="w-10 text-5xl" />
              <p className="text-xl text-[var(--green-13)] primary-font font-semibold py-8 pb-4">{about1.icon1title}</p>{" "}
              <p className="text-[var(--black-13)]">{about1.icon1description}</p>
            </span>{" "}
            <span className="bg-[var(--fffaf4)] py-8 px-6 hover:bg-[var(--white-13)] hover:text-[var(--fb7a3f)]">
              <img src={about1.icon2} FourFill className="w-10 text-5xl" />
              <p className="text-xl text-[var(--green-13)] primary-font font-semibold py-8 pb-4">{about1.icon2title}</p>{" "}
              <p className="text-[var(--black-13)]">{about1.icon2description}</p>
            </span>{" "}
            <span className="bg-[var(--fffaf4)] py-8 px-6 hover:bg-[var(--white-13)] hover:text-[var(--fb7a3f)]">
              <img src={about1.icon3} FourFill className="w-10 text-5xl" />
              <p className="text-xl text-[var(--green-13)] primary-font font-semibold py-8 pb-4">{about1.icon3title}</p>{" "}
              <p className="text-[var(--black-13)]">{about1.icon3description}</p>
            </span>{" "}
            <span className="bg-[var(--fffaf4)] py-8 px-6 hover:bg-[var(--white-13)] hover:text-[var(--fb7a3f)]">
              <img src={about1.icon4} className="w-10 text-5xl" />
              <p className="text-xl text-[var(--green-13)] primary-font font-semibold py-8 pb-4">{about1.icon4title}</p>{" "}
              <p className="text-[var(--black-13)]">{about1.icon4description}</p>
            </span>{" "}
          </div>
        </section>
        <section className="lg: flex justify-between items-center relative mt-12 lg:p-8">
          <div className="flex justify-center">
            <img src={about2.image} alt="" className="lg:w-80 w-80" />
          </div>
          <div className="lg:w-1/2 lg:py-0 py-20">
            <p className="text-[var(--fb7a3f)]">{about2.title}</p>
            <h1 className="text-[var(--green-13)] lg:text-5xl text-xl primary-font font-semibold pt-4 pb-6">
              {about2.heading} <span className="underline decoration-[#fdca51]">{about2.headingcont}</span>
            </h1>
            <p className="text-[var(--black-13)] leading-8">{about2.subtitle}</p>
            <div className="flex items-center lg:gap-x-8 py-8">
              <button className="rounded-full flex-row px-4 py-2 flex items-center text-sm bg-[#fd7b47]  gap-2 transition ease-out duration 300 transform hover:scale-110">
                <p className="text-[white]">Read more</p>
                <img src={about2.arrowR} className="w-10 text-xl" />
              </button>
              <button className="rounded full px-4 py 2 flex items-center flex-row  text-sm text [white] gap 2 transition ease-out duration 300 transform hover:scale-110">
                <p className="text-[var(--green-13)]">View Projects</p>
                <img src={about2.arrowR} className="w-10 text-xl" />
              </button>
            </div>
            <div className="flex justify-between  pt-4 lg:gap-0 gap-2">
              <span className="flex flex-col justify-center items-center">
                <h1 className="text-[var(--green-13)] primary-font text-4xl font-semibold">{about2.experience}</h1>
                <p className="w-1/2 lg:text-base text-sm">Years of experience</p>
              </span>
              <span className="flex flex-col justify-center items-center">
                <h1 className="text-[var(--green-13)] primary font text-4xl font-semibold">{about2.projects}</h1>
                <p className="w-1/2 lg:text-base text-sm">Projects completed</p>
              </span>
              <span className="flex flex-col justify-center items-center">
                <h1 className="text-[var(--green-13)] primary font text-4xl font-semibold">{about2.awards}</h1>
                <p className="w-1/2 lg:text-base text-sm">Awards gained</p>
              </span>
            </div>
          </div>
          <img src={about2.arrow} className="text-[var(--fb7a3f)] text-4xl absolute top-0  left-0 rotate-[315deg] w-10" />
          <img src={about2.arrow} className="text-[var(--fb7a3f)] text-4xl absolute top-0  left-0 rotate-[315deg] w-10" />
          <img src={about2.arrow} className="text-[var(--fb7a3f)] text-4xl absolute top-0  left-0 rotate-[315deg] w-10" />
          <img src={about2.arrow} className="text-[var(--fb7a3f)] text-4xl absolute top-0  left-0 rotate-[315deg] w-10" />
        </section>
      </div>
    </div>
  );
};

export default About13;
