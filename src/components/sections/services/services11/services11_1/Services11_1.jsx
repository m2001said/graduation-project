import React from "react";
import "../services11_1/services11_1.css";
import ServicesBox11 from "./ServicesBox11_1";
import { useSelector } from "react-redux";

const Services11 = () => {
  const { services11 } = useSelector((state) => state.template11);
  return (
    <section className="about container section11" id="about">
      <h2 className="section__title11">{services11[0].title}</h2>
      <div className="about11__container grid11">
        <img src={services11[0].imgUrl_ImageAbout11} alt="" className="aboutImg11" />
        <div className="about__data11 grid11">
          <div className="about__info11">
            <p className="about__description11">{services11[0].paragraf}</p>
            <a href="" className="btn11" id="btn11_1">
              {services11[0].btn}
            </a>
          </div>
          <div className="about__skills11 grid11">
            <div className="skills__data11">
              <div className="skills__titles11">
                <h3 className="skills__name11">{services11[0].skills11__name1}</h3>
                <span className="skills__number11">{services11[0].skills11__number1}</span>
              </div>
              <div className="skills__bar11">
                <span className="skills__percentage11 development"></span>
              </div>
            </div>
          </div>
          <div className="about11__skills grid11">
            <div className="skills__data11">
              <div className="skills__titles11">
                <h3 className="skills__name11">{services11[0].skills11__name2}</h3>
                <span className="skills__number11 ">{services11[0].skills11__number2}</span>
              </div>
              <div className="skills__bar11">
                <span className="skills__percentage11 ui__design"></span>
              </div>
            </div>
          </div>
          <div className="about11__skills grid11">
            <div className="skills__data11">
              <div className="skills__titles11">
                <h3 className="skills__name11">{services11[0].skills11__name3}</h3>
                <span className="skills__number11 ">{services11[0].skills11__number3}</span>
              </div>
              <div className="skills__bar11">
                <span className="skills__percentage11 photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesBox11 />
    </section>
  );
};
export default Services11;
