/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StyledPagination from './Pagination.styled.js';
function Pagination(props) {
  const { children, path, limit = 1 } = props;
  const { page } = useParams();
  const currentPage = parseInt(page, 10) || 1;
  console.log(path, 'sss');
  const begin = limit * (currentPage - 1);
  const end = currentPage * limit;
  const totalItems = React.Children.count(children);
  const totalPages = Math.ceil(totalItems / limit);

  const links = [...Array(totalPages)].map((_, index) => (
    <li key={index}>
      {' '}
      <Link to={`${path}/${index + 1}`}>{index + 1}</Link>{' '}
    </li>
  ));

  return (
    <StyledPagination>
      {React.Children.toArray(children).slice(begin, end)}
      <nav>
        <ul>{links}</ul>
      </nav>
    </StyledPagination>
  );
}

export default Pagination;
