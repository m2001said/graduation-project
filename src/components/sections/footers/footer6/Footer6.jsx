import React from "react";
import "./footer6.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector } from "react-redux";

const Footer6 = () => {
  const { footer } = useSelector((state) => state.template6);

  return (
    <footer className="footer6">
      <div className="footer__top">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className=" d-flex align-items-center gap-1 mb-4">
                  <span>
                    <img src={footer.imgUrl} alt="" className="ico-Logo" />
                  </span>{" "}
                    <img src={footer.logo} alt="logo" className="design6-LogoIcon" />
                </h2>
                <p>{footer.description}</p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">{footer.infoLinks.title}</h5>

              <ListGroup>
                {footer.infoLinks.content.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    <a href="#">{item}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="2" md="4" sm="6">
              <h5 className="footer__link-title">{footer.quickLinks.title}</h5>

              <ListGroup>
                {footer.quickLinks.content.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    <a href="#">{item}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">{footer.contact.title}</h5>

              <ListGroup>
                {footer.contact.content.map((item) => (
                  <ListGroupItem className="link__item d-flex align-items-center gap-3">
                    <img src={item.icon} alt="" className="ico" />
                    {item.title}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <Row>
            <Col lg="12">
              <p>{footer.copyright}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer6;
