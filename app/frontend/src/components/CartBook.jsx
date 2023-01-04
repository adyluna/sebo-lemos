import React from "react";
import { Image, Col, Row, Container } from 'react-bootstrap';
import logo from '../images/seboLogo.jpeg';

const CartBook = ({book}) => {
  const { name, author, genre, condition, price } = book;

  return (
    <Container className="mb-3 mt-3">
    <Row xs={2} className="p-1 m-1 align-items-center justify-content-center bg-warning rounded">
      <Image className="w-50 h-50 p-2" src={logo} alt='test-image'/>
      <Col style={{ fontSize: 10 }} className="p-1">
      <p className="m-2" style={{ fontSize: 13 }}><strong>{ name }</strong></p>
      <p className="m-1">Autor: { author }</p>
      <p className="m-1">{ genre }</p>
      <p className="m-1">{ condition }</p>
      { price && <p className="m-0">R$ { price },00</p> }
      </Col>
    </Row>
    <Row xs={2} className="align-items-center justify-content-center">
  </Row>
    </Container>
  );
};

export default CartBook;