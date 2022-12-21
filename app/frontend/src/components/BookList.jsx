import React from "react";
// import "../styles/BookList.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookList = ({books}) => {

  const truncate = (str) => {
    if (str.length > 20) {
      const slicedString = str.slice(0, 20) + '...';
      return slicedString;
    }
    return str;
  }

  const showBooks = books.map(({ name, author, genre, condition, price }, index) => {
    return (
    <Col key={index} class="bg-primary">
      <h5>{ truncate(name) }</h5>
      <p>Autor: { author }</p>
      <p>{ genre }</p>
      <p>{ condition }</p>
      { price && <p>R$ { price },00</p> }
    </Col>
  )
  })

  return (
    showBooks
  );
}

export default BookList;