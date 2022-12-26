import React, { useState, useEffect } from 'react';
import Book from '../components/Book';
import BookPagination from '../components/BookPagination';
import Loading from '../components/Loading';
import { requestData } from '../services/requests';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

const Books = () => {

  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  
  // Usado para procurar ao clicar no botão
  const [searchValue, setSearchValue] = useState(''); 

  useEffect(() => {
    const endpoint = '/allbooks';
    requestData(endpoint).then((response) => {
      setAllBooks(response);
      setBooks(response);
    }).catch((error) => console.log(error));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = books && books.slice(firstPostIndex, lastPostIndex);

  const filterBooks = (value) => {
    if (value === "") {
      return setBooks(allBooks);
    }

    const result = books.filter(({ name }) => {
      const bookName = name.toLowerCase();
      return bookName.includes(value.toLowerCase());
    });

    if (result.length === 0) {
      setBooks(allBooks)
    } else {
      setBooks(result); 
    }
  };

  const SearchBar = () => {
    return (
      <Row className='align-itens-center justify-content-center'>
          <InputGroup className="mb-3 w-50 mt-2">
            <Form.Control
              placeholder="Procure um livro"
              aria-label="Procure um livro"
              aria-describedby="basic-addon1"
              onChange={(event) => filterBooks(event.target.value)}
              onKeyDown={(event) => filterBooks(event.target.value)}
            />
            <Button onClick={() => filterBooks(searchValue)} className="btn-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </Button>
          </InputGroup>
        </Row>
    );
  }

  const showBooks = () => {
    return (
      <Container fluid className='m-2 text-center'>
        { SearchBar() }
        <Container fluid>
          <Row className='d-flex flex-wrap align-items-center justify-content-center m-2 p-1'>
            { currentPosts.map(({ name, author, genre, condition, price }, index) => {
              return <Book
              key={index}
              name={name}
              author={author}
              genre={genre}
              condition={condition}
              price={price}
            />
          }) }
          </Row>
        </Container>
        <Row>
          <BookPagination
          total={ Math.ceil(books.length / postsPerPage) }
          current={ currentPage }
          onChangePage={ setCurrentPage }
          />
        </Row>
      </Container>
    )
  }

  if (books.length >= 1) {
    return (
      showBooks()
      );
  }

  return <Loading />
}

export default Books;