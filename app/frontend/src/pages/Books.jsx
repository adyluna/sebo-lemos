import React, { useState, useEffect } from 'react';
import Book from '../components/Book';
import BookPagination from '../components/BookPagination';
import Loading from '../components/Loading';
import {Container, Row, Form, InputGroup, Button} from 'react-bootstrap';


const Books = ({allBooks, addProductToCart}) => {

  const [bookNotFound, setBookNotFound] = useState(false);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  
  // Usado para procurar ao clicar no botão
  const [searchValue, setSearchValue] = useState(''); 

  useEffect(() => {
    if (allBooks) setBooks(allBooks);
  }, [allBooks]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentBooks = books && books.slice(firstPostIndex, lastPostIndex);

  const filterBooks = (value) => {
    if (value === "") {
      return setBooks(allBooks);
    }

    const result = allBooks.filter(({ name }) => {
      const bookName = name.toLowerCase();
      return bookName.includes(value.toLowerCase());
    });

    if (result.length === 0) {
      setBookNotFound(true);
    } else {
      setBookNotFound(false);
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
              onChange={(event) => setSearchValue(event.target.value)}
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
      <Container fluid className='text-center'>
        { SearchBar() }
        {
          bookNotFound
            ? <p>Nenhum livro com esse nome foi encontrado.</p>
            : <Row xs={1} sm={1} md={2} lg={3} xl={4} className='align-items-center justify-content-center m-2 p-1'>
            { currentBooks.map((book, index) => {
              return <Book
              key={index}
              book={book}
              addProductToCart={addProductToCart}
            />
          }) }
          </Row>
        }
        <Row>
          {
            !bookNotFound && <BookPagination
            total={ Math.ceil(books.length / postsPerPage) }
            current={ currentPage }
            onChangePage={ setCurrentPage }
            />
          }
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