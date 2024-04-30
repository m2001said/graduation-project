import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
const Footer13 = () => {
  // const footer = useSelector((state) => state.template13.footer);
  const { pathname } = useLocation();
  const footer = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.footer;
    } else {
      return state.template13.footer;
    }
  });
  return (
    <footer className="bg-[var(--color-13-green)] text-[var(--white-13)] pb-16">
      <div className="container mx-auto px-3 lg:pt-20 pt-8">
        <section>
          <div className="lg:flex items-center justify-between">
            <span className="lg:w-4/5 lg:flex items-center justify-start">
              <button className="lg:w-1/3 flex items-center gap-x-4  text-[var(--white-13)]">
                <img src={footer.bolt} className="text-2xl w-20" />
                <p className="text-2xl primary-font text-[var(--white-13)]">{footer.Name}</p>
              </button>
              <p className="lg:flex justify-center lg:w-1/3 lg:py-0 py-6 text-[var(--white-13)]">{footer.desc}</p>
            </span>
            <span className="lg:w-1/3 flex items-center gap-x-8 lg:pb-0 pb-4">
              <p className="text-[var(--white-13)]">{footer.connectp1}</p>
              <button className="rounded-full px-3 py-2 flex items-center justify-center bg-[var(--color-13-yel)] text-[var(--colo-13-green)] gap-2 transition ease-out duration-300 transform hover:scale-110 ">
                <p className="text-[var(--white-13)]">{footer.connectp2}</p>
                <img src={footer.ArrR} className="w-5" />
              </button>
            </span>
          </div>
          <div className="lg:py-20">
            <ul className="lg:flex items-center justify-between">
              <div className="lg:flex items-center justify-start lg:w-4/5">
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#hero13">{footer.home}</a>
                </li>
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#">{footer.design}</a>
                </li>

                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#projects13">{footer.projects}</a>
                </li>
              </div>
              <li className="lg:w-1/3 lg:pb-0 pb-3">{footer.follow}</li>
            </ul>
            <ul className="lg:flex items-center justify-between lg:pt-8">
              <div className="lg:flex items-center justify-start lg:w-4/5">
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#about13">{footer.about}</a>
                </li>
                <li className="lg:w-1/4 lg:pb-0 pb-3">
                  <a href="#projects13">{footer.award}</a>
                </li>
              </div>
              <span className="text-[var(--white-13)] lg:w-1/3 justify-center flex items-center gap-4">
                <img src={footer.facebook} className="cursor-pointer rounded-full border border-[var(--color-g-13-g)] p-2 h-8 w-8" />
                <img src={footer.instagram} className="cursor-pointer rounded-full border border-[var(--color-g-13-g)] p-2 h-8 w-8" />
                <img src={footer.facebook} className="cursor-pointer rounded-full border border-[var(--color-g-13-g)] p-2 h-8 w-8" />
                <img src={footer.linked} className="cursor-pointer rounded-full border border-[var(--color-g-13-g)] p-2 h-8 w-8" />
                <img src={footer.twitter} className="cursor-pointer rounded-full border border-[var(--color-g-13-g)] p-2 h-8 w-8" />
              </span>
            </ul>
          </div>
        </section>
        <section>
          <ul className="sm:flex justify-between pt-8">
            <li>
              <a href="#">{footer.privacy}</a>
            </li>
            <li>
              <a href="#">{footer.rights}</a>
            </li>
            <li>
              <a href="#">{footer.conditions}</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer13;
