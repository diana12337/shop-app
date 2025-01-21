import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import StyledFooterNav from './FooterNav.styled.js';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import LocalStorageContext from '../../context/LocalStorageContext.js';
function FooterNav() {
  const { user } = useContext(LocalStorageContext);
  return (
    <StyledFooterNav>
      <ul>
        <h1> About us</h1>

        <li>
          <Link to={'/about'}>About </Link>
        </li>

        <li>
          <Link to={'/ourHistory'}>Our History </Link>
        </li>
      </ul>
      <ul>
        <h1>My account</h1>
        <li>
          {user ? (
            <Link to={'/userPanel'}>My account</Link>
          ) : (
            <Link to={'/loginPanel'}>My account </Link>
          )}
        </li>

        <li>
          <Link to={'/purchaseTerms'}>Purchase terms</Link>
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
