import React from "react";
import { Pagination } from 'react-bootstrap';

const BookPagination = ({  total, current, onChangePage }) => {
  let items = [];
  if (current > 1) {
    items.push(<Pagination.Prev key="prev" onClick={() => onChangePage(current - 1)} />);
  }

  const maxPag = () => {
    for (let page = 1; page <= total; page++) {
      items.push(
        <Pagination.Item key={page} data-page={page} active={page===current} onClick={() => onChangePage(page)}>
          {page}
        </Pagination.Item>
      );
    }
  };

  const minPag = () => {
    items.push(
      <>
        <Pagination.Item key={1} data-page={1} active={1===current} onClick={() => onChangePage(1)}>
          {1}
        </Pagination.Item>
        <Pagination.Item key={2} data-page={2} active={2===current} onClick={() => onChangePage(2)}>
          {2}
        </Pagination.Item>
        <Pagination.Ellipsis key="ellipsis"/>
        <Pagination.Item key={total -1} data-page={total -1} active={total -1===current} onClick={() => onChangePage(total -1)}>
          {total -1}
        </Pagination.Item>
        <Pagination.Item key={total} data-page={total} active={total===current} onClick={() => onChangePage(total)}>
          {total}
        </Pagination.Item>
      </>
    )
  }

  if (total >= 6) {
    minPag();
  } else maxPag();

  if (current < total) {
    items.push(<Pagination.Next key="next" onClick={() => onChangePage(current + 1)} />);
  }

  return (
    <Pagination className="justify-content-center">{items}</Pagination>
  )
};

export default BookPagination;