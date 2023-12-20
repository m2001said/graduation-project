import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./product-card/ProductCard";
import "./cartItems6.css";
import { useSelector } from "react-redux";


const CartItems6 = () => {
  const { product } = useSelector((state) => state.template6);

  return (
    <section className="pt-0 design-6">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 className="popular__menu-title">{product.cartitemsTitle}</h2>
          </Col>
          {product.popularMenuFood.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CartItems6;
