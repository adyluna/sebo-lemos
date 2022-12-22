import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import BookPagination from '../components/BookPagination';
import Loading from '../components/Loading';
import { requestData } from '../services/requests';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Books = () => {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
    const endpoint = '/allbooks'
    requestData(endpoint).then((response) => {
      setBooks(response);
    }).catch((error) => console.log(error));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = books && books.slice(firstPostIndex, lastPostIndex);

  const showBooks = () => {
    return (
      <div className='m-2 text-center'>
        <div className='d-flex flex-wrap align-items-center justify-content-center m-2 p-1 h-100'>
          <BookList books={ currentPosts }/>
        </div>
        <Row className='position-absolute top-100 start-50 translate-middle'>
          <BookPagination
          total={ Math.ceil(books.length / postsPerPage) }
          current={ currentPage }
          onChangePage={ setCurrentPage }
          />
        </Row>
      </div>
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