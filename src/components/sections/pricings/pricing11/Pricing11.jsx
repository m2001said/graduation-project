import React from "react";
import "../pricing11/pricing11.css";
import { useSelector } from "react-redux";

const Pricings11 = () => {
  const { pricing } = useSelector((state) => state.template11);
  return (
    <section className="pricing1 container section11" id="layers">
      <h2 className="section__title11">{pricing.title.titl0}</h2>
      <div className="pricing__container11 grid11">
        <div className="pricing__item11">
          <img src={pricing.imgUrl[0]} alt="" className="pricing__img11" />
          <h3 className="pricing__plan11">{pricing.title.titl1}</h3>
          <p className="princing__title11">{pricing.paragraf.p1}</p>
          <p className="pricing__support11">{pricing.paragraf.p2}</p>
          <h3 className="price11">
            <em>{pricing.item11[0].item1}</em> {pricing.item11[0].item2}
            <span>{pricing.item11[0].item3}</span>
          </h3>
          <a href="" className="btn11">
            {pricing.btn.B1}
          </a>
        </div>
        <div className="pricing__item11 best">
          <span className="badge11">{pricing.title.titl2}</span>
          <img src={pricing.imgUrl[1]} alt="" className="pricing__img11" />
          <h3 className="pricing__plan11">{pricing.title.titl4}</h3>
          <p className="princing__title11">{pricing.paragraf.p3}</p>
          <p className="pricing__support">{pricing.paragraf.p4}</p>
          <h3 className="price11">
            <em>{pricing.item11[1].item4}</em> {pricing.item11[1].item5} <span>{pricing.item11[1].item6}</span>
          </h3>
          <a href="" className="btn11">
            {pricing.btn.B1}
          </a>
        </div>
        <div className="pricing__item11 ">
          <img src={pricing.imgUrl[2]} alt="" className="pricing__img11" />
          <h3 className="pricing__plan11">{pricing.title.titl3}</h3>
          <p className="princing__title11">{pricing.paragraf.p5}</p>
          <p className="pricing__support">{pricing.paragraf.p6}</p>
          <h3 className="price11">
            <em>{pricing.item11[2].item7}</em> {pricing.item11[2].item8} <span>{pricing.item11[2].item9}</span>
          </h3>
          <a href="" className="btn11">
            {pricing.btn.B1}
          </a>
        </div>
      </div>
    </section>
  );
};
export default Pricings11;
