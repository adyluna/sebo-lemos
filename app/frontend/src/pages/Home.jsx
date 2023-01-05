import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import seboLogo from '../images/seboLogo.jpeg';
import Book from '../components/Book';
import Loading from '../components/Loading';

const Home = ({allBooks, addProductToCart}) => {
  const [highlightBooks, setHighlightBooks] = useState([]);

  useEffect(() => {
    const handleHLBooks = () => {
      setHighlightBooks(allBooks);
    }

    handleHLBooks();
  })

  if (highlightBooks.length === 0) return <Loading />

  return (
    <Container fluid>
      <h3>Destaques</h3>
      <Row xs={1} sm={1} md={2} lg={3} xl={4} className="align-items-center justify-content-center">
        {
          highlightBooks.slice(1,4).map((book, index) =>
            <Book
              key={index}
              book={book}
              addProductToCart={addProductToCart}
            />
          )
        }
      </Row>
      <h3>Novidades</h3>
      <Row xs={1} sm={1} md={2} lg={3} xl={4} className="align-items-center justify-content-center">
      {
        highlightBooks.slice(highlightBooks.length - 3, highlightBooks.length).map((book, index) =>
          <Book
            key={index}
            book={book}
            addProductToCart={addProductToCart}
          />
        )
        }
      </Row>
      <h3>Relacionado</h3>
      <Row md={2} sm={1} xs={1} className="align-items-center justify-content-center p-3">
        <Col className='p-2'>
        <div className="card flex-md-row mb-4 box-shadow h-md-250 align-items-center justify-content-center">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">World</strong>
            <h3 className="mb-0">
              <a className="text-dark" href="about">Featured post</a>
            </h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="about">Continue reading</a>
          </div>
          <img src={seboLogo} alt="sebo-logo" className="w-50 h-50 p-2"/>
          </div>
        </Col>
        <Col className='p-2'>
        <div className="card flex-md-row mb-4 box-shadow h-md-250 align-items-center justify-content-center">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">World</strong>
            <h3 className="mb-0">
              <a className="text-dark" href="about">Featured post</a>
            </h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="about">Continue reading</a>
          </div>
          <img src={seboLogo} alt="sebo-logo" className="w-50 h-50 p-2"/>
          </div>
        </Col>
      </Row>
      </Container>
  )
}

export default Home;