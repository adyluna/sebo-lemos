import React from "react";
// import '../styles/Pagination.css';


const Pagination = ({  totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const pages = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts/ postsPerPage); i += 1) {
    pages.push(i);
  }

  return (
    <div className="Pagination">
      {
        pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={ () => setCurrentPage(page) }
              className={ page === currentPage ? 'active' : '' }>
                {page}
            </button>
          )
        })
      }
    </div>
  )
};

export default Pagination;