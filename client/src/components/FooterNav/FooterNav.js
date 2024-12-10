import React from 'react';

import StyledFooterNav from './FooterNav.styled.js';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
function FooterNav() {
  return (
    <StyledFooterNav>
      <ul>
        <h1> About us</h1>
        <li>
          <a href="/about">About</a>{' '}
        </li>
        <li>
          <a href="/ourHistory">Our history</a>{' '}
        </li>
      </ul>
      <ul>
        <h1>My account</h1>
        <li>
          <a href="/loginPanel">My account</a>{' '}
        </li>

        <li>
          <a href="/purchaseTerms">Purchase terms</a>{' '}
        </li>
      </ul>
      <ul>
        <h1>Social media</h1>
        <li>
          <a>
            <img src={facebook} alt="facebook"></img>
          </a>
          <p>ShopApp</p>{' '}
        </li>

        <li>
          {' '}
          <a>
            <img src={instagram} alt="instagram"></img>
          </a>
          <p> ShopApp</p>{' '}
        </li>
      </ul>
    </StyledFooterNav>
  );
}

export default FooterNav;
