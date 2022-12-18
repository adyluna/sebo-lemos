import React, { useState, useEffect } from 'react';
import { requestData } from '../services/requests';

const Books = () => {

  const [books, setBooks] = useState();

  useEffect(() => {
    const endpoint = '/allbooks'
    requestData(endpoint).then((response) => {
      setBooks(response);
    }).catch((error) => console.log(error));
  }, []);

  const showBooks = books && books.map((book, index) => <h1 key={ index } >{ book.name }</h1>);

  return (
      showBooks
    );
}

export default Books;