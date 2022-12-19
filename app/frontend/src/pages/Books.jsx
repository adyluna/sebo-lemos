import React, { useState, useEffect } from 'react';
import BooksList from '../components/BooksList';
import Pagination from '../components/Pagination';
import { requestData } from '../services/requests';

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
      <div>
        <BooksList books={ currentPosts }/>
        <Pagination totalPosts={ books.length } postsPerPage={postsPerPage} setCurrentPage={ setCurrentPage }/>
      </div>
    )
  }

  if (books.length >= 1) {
    return (
      showBooks()
      );
  }

  return <h1>Carregando...</h1>
}

export default Books;