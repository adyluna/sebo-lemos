import React from "react";
import { Container, Image, Col } from 'react-bootstrap';

const Book = ({ name, author, genre, condition, price }) => {

  const truncate = (str) => {
    if (str.length > 20) {
      const slicedString = str.slice(0, 20) + '...';
      return slicedString;
    }
    return str;
  }

  return (
    <Col className="p-1 m-4">
      <Image fluid href="https://sebo-backend-production.up.railway.app/images/test01" alt='test-image'/>
      <h5>{ truncate(name) }</h5>
      <p>Autor: { author }</p>
      <p>{ genre }</p>
      <p>{ condition }</p>
      { price && <p>R$ { price },00</p> }
    </Col>
  );
};

export default Book;