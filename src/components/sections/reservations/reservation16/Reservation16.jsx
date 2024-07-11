import React from "react";

import "./reservation16.css";

const Reservation16 = ({ template }) => {
  const reservation = template.reservation;

  return (
    <section className="reservation16 container16" id={reservation.sectionId}>
      <h2 className="section__title16 " data-title="Reservation">
        {reservation.title}
      </h2>
      <form action="" className="reservation__form16 grid16">
        <div className="form__input-div16">
          <input type="text" placeholder="Your Name" className="form__input16" />
        </div>
        <div className="form__input-div16">
          <input type="email" placeholder="Your Email Address" className="form__input16" />
        </div>
        <div className="form__input-div16">
          <input type="text" placeholder="Your Phone" className="form__input16" />
        </div>
        <div className="form__input-div16">
          <input type="text" placeholder="Date Ex: DD/MM/YY" className="form__input16" />
        </div>
        <div className="form__input-div16">
          <input type="text" placeholder="Time Ex: 01:25PM" className="form__input16" />
        </div>
        <div className="form__input-div16">
          <input type="text" placeholder="Number of People" className="form__input16" />
        </div>
        <div className="form__input-div16 form__input-textarea16">
          <textarea placeholder="Your Message" className="form__input16"></textarea>
        </div>
        <button className="btn16 btn--flex16 reservation__btn16">
          &#x1F516; {reservation.buttonText}
          {/* Unicode character for bookmark */}
        </button>
      </form>
      <img src={reservation.imgUrl} alt="" className="shape__two16" />
      <img src={reservation.shape} alt="" className="shape__three16" />
    </section>
  );
};

export default Reservation16;
