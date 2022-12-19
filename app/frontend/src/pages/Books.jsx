import React, { useState, useEffect } from 'react';
import BooksList from '../components/BooksList';
import { requestData } from '../services/requests';

const Books = () => {

  const [books, setBooks] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

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
      </div>
    )
  }
 
  // <Pagination totalPosts={ books.length } postsPerPage={postsPerPage} />

  return (
    books && showBooks()
    );
}

export default Books;