import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledHeader from './Header.styled.js';
import Nav from '../Nav/Nav.js';
import Button from '../Button/Button.js';
import bag from '../../img/bag.png';
import account from '../../img/account.png';
import LocalStorageContext from '../../context/LocalStorageContext.js';

function Header() {
  const { user, userData } = useContext(LocalStorageContext);

  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div>
        <div>
          <h1
            onClick={() => {
              navigate('/');
            }}
          >
            ShoppApp
          </h1>
        </div>
        <div>
          <Button
            buttonStyle="headerButton"
            background={account}
            onClick={() => {
              user ? navigate('/userPanel') : navigate('/loginPanel');
            }}
          />
          {user ? (
            <p
              onClick={() => {
                navigate('/userPanel');
              }}
            >
              {user.displayName}
            </p>
          ) : (
            ''
          )}
        </div>
        <section>
          <Button
            buttonStyle="headerButton"
            background={bag}
            onClick={() => {
              navigate('/cart');
            }}
          />

          {userData ? (
            <span>
              {userData.reduce(
                (accumulator, product) => accumulator + product.amount,
                0
              )}
            </span>
          ) : (
            <span></span>
          )}
        </section>
      </div>
      <Nav />
    </StyledHeader>
  );
}

export default Header;
