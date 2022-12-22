import React from "react";

const BookList = ({books}) => {

  const truncate = (str) => {
    if (str.length > 20) {
      const slicedString = str.slice(0, 20) + '...';
      return slicedString;
    }
    return str;
  }

  const showBooks = books.map(({ name, author, genre, condition, price }, index) => {
    return (
    <div key={index}>
      <h5>{ truncate(name) }</h5>
      <p>Autor: { author }</p>
      <p>{ genre }</p>
      <p>{ condition }</p>
      { price && <p>R$ { price },00</p> }
    </div>
  )
  })

  return (
    showBooks
  );
}

export default BookList;