import React from "react";
import "./cta6.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Cta6 = () => {
  const { pathname } = useLocation();
  const cta = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta;
    } else {
      return state.template6.cta;
    }
  });
  return (
    <section className="design-6" id="Contact">
      <div className="container mx-auto px-4">
        <div className="app__container">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-6/12">
              <div className="app__img">
                <img src={cta.imgUrl} alt="" />
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-6/12">
              <div className="app__content">
                <h5>{cta.title}</h5>
                <h2 className="mb-4">{cta.description}</h2>
                <p>{cta.info}</p>

                <div className="app__btns flex items-center gap-5 mt-4">
                  <button className="btn__apple flex items-center gap-3">
                    <img src={cta.appleButton.icon} alt="" className="ico" />
                    <a href="https://www.apple.com/store">{cta.appleButton.title}</a>
                  </button>

                  <button className="btn__google flex items-center gap-3">
                    <img src={cta.googleButton.icon} alt="" className="ico" /> <a href="https://play.google.com">{cta.googleButton.title}</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta6;
