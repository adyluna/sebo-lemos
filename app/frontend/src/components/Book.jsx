import React from "react";

const Book = ({ name, author, genre, condition, price, index }) => {

  const truncate = (str) => {
    if (str.length > 20) {
      const slicedString = str.slice(0, 20) + '...';
      return slicedString;
    }
    return str;
  }

  return (
    <div key={index} className="p-1 m-4 w-25 h-25">
      <h5>{ truncate(name) }</h5>
      <p>Autor: { author }</p>
      <p>{ genre }</p>
      <p>{ condition }</p>
      { price && <p>R$ { price },00</p> }
    </div>
  );
};

export default Book;