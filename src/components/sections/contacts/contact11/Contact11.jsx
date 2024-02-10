import React from "react";
import "../contact11/contact11.css";
import { useSelector } from "react-redux";

const Contact11 = () => {
  const { Cont11 } = useSelector((state) => state.template11);
  return (
    <section className="contact11 container scetion" id="contact">
      <h2 className="section__title11">{Cont11[0].title.title0}</h2>
      <div className="contact__container11 grid11">
        <div className="contact__info11">
          <h3 className="contact__title11">{Cont11[0].pargraf.p1}</h3>
          <p className="contact__details11">{Cont11[0].pargraf.p2}</p>
        </div>
        <form action="" className="contact__form11">
          <div className="contact__form-group11">
            <div className="contact__form-input11_0">
              <div className="contact__form-div11">
                <input type="text" className="contact__form-input11_1 " placeholder="Insert your name" />
              </div>
              <div className="contact__form-div11">
                <input type="email" className="contact__form-input11_2" placeholder="Insert your email" />
              </div>
            </div>
            <div className="contact__form-input11_6">
              <div className="contact__form-div11">
                <input type="text" className="contact__form-input11_3" placeholder="Insert your subject" />
              </div>
              <div className="contact__form-div11 contact__form_area11">
                <textarea name="" id="" cols="30" rows="10" className="contact__form-input11_4" placeholder="Write your message"></textarea>
              </div>
              <button className="btn11 btn11_5">{Cont11[0].btn}</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact11;
