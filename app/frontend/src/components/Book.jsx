import React, { useState, useEffect } from "react";
import { requestImage } from "../services/requests";
import { Col, Row, Button, ButtonGroup, Container } from 'react-bootstrap';

const Book = ({book, addProductToCart}) => {
  const [bookImage, setBookImage] = useState(null);
  const { name, author, genre, condition, price } = book;

  useEffect(() => {
    const handleGetImage = async () => {
      const fetchImage = await requestImage('/images/test01');
      setBookImage(fetchImage);
    }

    handleGetImage();
  }, []);

  return (
    <Container className="mb-5">
    <Row xs={2} style={{ backgroundColor: '#C9CDEC' }} className="p-1 m-1 align-items-center justify-content-center rounded">
      { bookImage }
      <Col style={{ fontSize: 10, width: 50, height: 50 }} className="p-1">
      <p className="m-2" style={{ fontSize: 13 }}><strong>{ name }</strong></p>
      <p className="m-1">Autor: { author }</p>
      <p className="m-1">{ genre }</p>
      <p className="m-1">{ condition }</p>
      { price && <p style={{ fontSize: 14 }} className="m-0">R$ { price },00</p> }
      </Col>
    </Row>
    <Row xs={2} className="align-items-center justify-content-center">
    <ButtonGroup size="sm" className="align-items-center justify-content-center">
      <Button style={{ backgroundColor: '#3A095B' }}>Detalhes</Button>
      <Button
        style={{ whiteSpace: 'nowrap', backgroundColor: '#21a0a0' }}
        onClick={() => addProductToCart(book)}
      >
        Adicionar ao carrinho
      </Button>
    </ButtonGroup>
  </Row>
    </Container>
  );
};

export default Book;