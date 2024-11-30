import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledHeader from './Header.styled.js';
import Nav from '../Nav/Nav.js';
import Button from '../Button/Button.js';
import bag from '../../img/bag.png';
import account from '../../img/account.png';
import LocalStorageContext from '../../context/LocalStorageContext.js';

function Header() {
  const { user } = useContext(LocalStorageContext);

  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div>
        <h1
          onClick={() => {
            navigate('/');
          }}
        >
          Logo
        </h1>
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
        <Button buttonStyle="headerButton" background={bag} />
      </div>
      <Nav />
    </StyledHeader>
  );
}

export default Header;
