import React from "react";
import { Image, Col, Row, Button, ButtonGroup, Container } from 'react-bootstrap';
import logo from '../images/seboLogo.jpeg';

const Book = ({book, addProductToCart}) => {
  const { name, author, genre, condition, price } = book;
  // const [bookInfo, setBookInfo] = useState();

  
  // const imageURL = 'https://sebo-backend-production.up.railway.app/images/test01';

  // const truncate = (str) => {
  //   if (str.length > 40) {
  //     const slicedString = str.slice(0, 40) + '...';
  //     return slicedString;
  //   }
  //   return str;
  // }

  return (
    <Container className="mb-5">
    <Row xs={2} style={{ backgroundColor: '#C9CDEC' }} className="p-1 m-1 align-items-center justify-content-center rounded">
      <Image className="w-50 h-50 p-2" src={logo} alt='test-image'/>
      <Col style={{ fontSize: 10 }} className="p-1">
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