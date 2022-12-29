import React from "react";
import { Container, Image, Col, Row } from 'react-bootstrap';
import logo from '../images/seboLogo.jpeg';

const Book = ({ name, author, genre, condition, price }) => {

  // const imageURL = 'https://sebo-backend-production.up.railway.app/images/test01';

  const truncate = (str) => {
    if (str.length > 20) {
      const slicedString = str.slice(0, 20) + '...';
      return slicedString;
    }
    return str;
  }

  return (
    <Row xs={2} className="p-1 m-4 align-items-center justify-content-center bg-warning rounded">
      <Image className="w-50 h-50 p-2" src={logo} alt='test-image'/>
      <Col fluid style={{ fontSize: 10 }} className="p-1">
      <p className="m-2" style={{ fontSize: 13 }}><strong>{ truncate(name) }</strong></p>
      <p className="m-1">Autor: { author }</p>
      <p className="m-1">{ genre }</p>
      <p className="m-1">{ condition }</p>
      { price && <p className="m-0">R$ { price },00</p> }
      </Col>
    </Row>
  );
};

export default Book;