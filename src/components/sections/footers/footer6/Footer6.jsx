import React from 'react'
import "./footer6.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import restaurant2 from "../../../../assets/images/images6/restaurant-2-line.svg";
import map from "../../../../assets/images/images6/map-pin-line.svg";
import mail from "../../../../assets/images/images6/mail-line.svg";
import phone from "../../../../assets/images/images6/phone-line.svg";


const footerQuickLinks = [
  {
    display: "Terms & Conditions",
  },
  {
    display: "Privacy Policy",
  },
  {
    display: "Return & Refund",
  },

  {
    display: "Payment Method",
  },
];

const footerLinks = [
  {
    display: "About Us",
  },
  {
    display: "Menu",
  },
  {
    display: "Recipes",
  },

  {
    display: "Contact",
  },
];

const Footer6 = () => {
  return (
    <footer className="footer6">
    <div className="footer__top">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="6">
            <div className="logo">
              <h2 className=" d-flex align-items-center gap-1 mb-4">
                <span>
                  <img src={restaurant2} alt=""  className="ico-Logo"/>
                </span>{" "}
                Chef Food
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                facere eligendi laboriosam id exercitationem tempore.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__link-title">Info Links</h5>

            <ListGroup>
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="link__item">
                  <a href="#">{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="4" sm="6">
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup>
              {footerLinks.map((item, index) => (
                <ListGroupItem key={index} className="link__item">
                  <a href="#">{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup>
              <ListGroupItem className="link__item d-flex align-items-center gap-3">
                <img src={map} alt=""  className="ico"/>
                 Sylhet, Bangladesh{" "}
              </ListGroupItem>

              <ListGroupItem className="link__item d-flex align-items-center gap-3">
                <img src={mail} alt=""  className="ico"/>
                 example@gmail.com{" "}
              </ListGroupItem>

              <ListGroupItem className="link__item d-flex align-items-center gap-3">
                <img src={phone} alt=""  className="ico"/>
                 +880 123 456 7890
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="footer__bottom">
      <Container>
        <Row>
          <Col lg="12">
            <p>copyright 2022, developed by ana. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>  )
}

export default Footer6