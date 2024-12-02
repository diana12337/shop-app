import React from 'react';
import { useSelector } from 'react-redux';
import StyledNav from './Nav.styled.js';
import { Link } from 'react-router-dom';

function Nav() {
  const products = useSelector((state) => state.products);

  if (products.length > 0) {
    const categories = Array.from(
      new Set(products.map((item) => item.category))
    );

    const nav = categories.map((item, index) => (
      <li key={index}>
        <Link to={`/category/${item.split(' ').join('-')}/1`}>{item}</Link>
      </li>
    ));

    return (
      <StyledNav>
        <ul>
          {nav}{' '}
          <li>
            <a>About</a>{' '}
          </li>
        </ul>
      </StyledNav>
    );
  }

  return <p>No categories available</p>;
}

export default Nav;
