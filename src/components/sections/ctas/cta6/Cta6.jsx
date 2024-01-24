import React from "react";
import "./cta6.css";
import { useSelector } from "react-redux";

import { Container, Row, Col } from "reactstrap";

const Cta6 = () => {
  const { cta } = useSelector((state) => state.template6);
  return (
    <section className="design-6" id="Contact">
      <Container className="app__container">
        <Row>
          <Col lg="6" md="6">
            <div className="app__img">
              <img src={cta.imgUrl} alt="" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="app__content">
              <h5>{cta.title}</h5>
              <h2 className="mb-4">{cta.description}</h2>
              <p>{cta.info}</p>

              <div className="app__btns d-flex align-items-center gap-5 mt-4">
                <button className="btn__apple d-flex align-items-center gap-3">
                  <img src={cta.appleButton.icon} alt="" className="ico" />
                  <a href="#">{cta.appleButton.title}</a>
                </button>

                <button className="btn__google d-flex align-items-center gap-3">
                  <img src={cta.googleButton.icon} alt="" className="ico" /> <a href="https://play.google.com">{cta.googleButton.title}</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cta6;
