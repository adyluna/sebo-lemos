import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import CartBook from "../components/CartBook";

const ShoppingCart = ({products}) => {
  return (
    <Container>
      <Row className="align-items-center justify-content-center" lg={2} md={1} xs={1}>
        <Col>
        { products.map((book, index) => <CartBook key={index} book={book}/>) }
        </Col>
      </Row>
    </Container>
  )
};

export default ShoppingCart;