import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import { requestData } from '../services/requests';
import Row from 'react-bootstrap/esm/Row';
// import '../styles/Books.css';

const Books = () => {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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
      <div className='BookListContainer'>
        <Row>
          <BookList books={ currentPosts }/>
        </Row>
        <Pagination
          totalPosts={ books.length }
          postsPerPage={postsPerPage}
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          />
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