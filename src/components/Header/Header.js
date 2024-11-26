import React from 'react';
import StyledHeader from './Header.styled.js';
import Nav from '../Nav/Nav.js';
import Button from '../Button/Button.js';
import bag from '../../img/bag.png';
import account from '../../img/account.png';
function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>Logo</h1>
        <Button buttonStyle="headerButton" background={account} />
        <Button buttonStyle="headerButton" background={bag} />
      </div>
      <Nav />
    </StyledHeader>
  );
}

export default Header;
