import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import menu from '../../img/menu.png';
import cross from '../../img/cross.png';
import Button from '../Button/Button.js';
import { StyledNav, BurgerMenuButton, BurgerMenu } from './Nav.styled.js';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.products);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (products.length > 0) {
    const categories = Array.from(
      new Set(products.map((item) => item.category))
    );

    const navLinks = categories.map((item, index) => (
      <li key={index}>
        <Link to={`/category/${item.split(' ').join('-')}/1`}>{item}</Link>
      </li>
    ));

    return (
      <>
        <BurgerMenuButton onClick={toggleMenu} background={menu} />

        <StyledNav isOpen={isOpen}>
          <ul>
            {navLinks}
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </StyledNav>
        <BurgerMenu isOpen={isOpen}>
          <Button
            background={cross}
            buttonStyle="buttonReturn"
            onClick={() => setIsOpen(false)}
            isOpen={isOpen}
          />

          <h1>ShoppApp</h1>
          <ul>
            {navLinks}
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </BurgerMenu>
      </>
    );
  }
}

export default Nav;
