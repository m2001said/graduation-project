import React from "react";
import "./feature6.css";
import { Container, Row, Col } from "reactstrap";
import pastaImg from "../../../../assets/images/images6/pasta.png";
import truck from "../../../../assets/images/images6/truck-line.svg";
import dollar from "../../../../assets/images/images6/money-dollar-circle-line.svg";
import payment from "../../../../assets/images/images6/secure-payment-line.svg";
import hours from "../../../../assets/images/images6/24-hours-line.svg";
import { useSelector } from "react-redux";


const Feature6 = () => {
  const { feature  } = useSelector((state) => state.template6);


  return (
    <section className="design-6">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={feature.imgUrl} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6">
            <div className="choose__content">
              <h4>{feature.title}</h4>
              <h2>{feature.description}</h2>
              <p>{feature.info}</p>
            </div>

            <div className="features mt-4">
              <div className="feature1 d-flex align-items-center gap-5">
                
                <div className="single__feature">
                  <span>
                    <img src={feature.cards[0].icon} alt="" className="ico" />
                  </span>
                  <h6>{feature.cards[0].title}</h6>
                  <p>{feature.cards[0].description}</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-two">
                    <img src={feature.cards[1].icon} alt="" className="ico" />
                  </span>
                  <h6>{feature.cards[1].title}</h6>
                  <p>{feature.cards[1].description}</p>
                </div>

              </div>

              <div className="feature1 mt-3 d-flex align-items-center gap-5">
               
                <div className="single__feature">
                  <span className="feature__icon-3">
                    <img src={feature.cards[2].icon} alt="" className="ico" />
                  </span>
                  <h6>{feature.cards[2].title}</h6>
                  <p>{feature.cards[2].description}</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-4">
                    <img src={feature.cards[3].icon} alt="" className="ico" />
                  </span>
                  <h6>{feature.cards[3].title}</h6>
                  <p>{feature.cards[3].description}</p>
                </div>
              
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature6;
