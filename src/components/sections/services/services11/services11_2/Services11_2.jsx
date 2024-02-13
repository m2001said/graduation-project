import React from "react";
import "../services11_2/services11_2.css";
import { useSelector } from "react-redux";

const Services11_2 = () => {
  const { data } = useSelector((state) => state.template11);
  return (
    <section className="services11 container section" id="services">
      <h2 className="section__title11">Services</h2>
      <div className="services__container11_2 grid11">
        {data.map(({}) => {
          return (
            <div className="services__card11_2" key={data[0].id}>
              <img src={data[0].image} alt="" className="services__img11_2" />
              <h3 className="services__title11_2">{data[0].title}</h3>
              <p className="services__description11_2">{data[0].description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Services11_2;
