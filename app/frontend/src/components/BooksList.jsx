import React from "react";

const BooksList = ({books}) => {

  const showBooks = books.map(({ name, author, genre, condition, price }, index) => {
    return (
    <div key={index}>
      <h4>{ name }</h4>
      <p>Autor: { author }</p>
      <p>Genero: { genre }</p>
      <p>Condição: { condition }</p>
      <p>Preço: R$ { price },00</p>
    </div>
  )
  })

  return (
    showBooks
  );
}

export default BooksList;