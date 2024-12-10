import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.js';
import StyledUserPage from './UserPage.styled.js';
import Layout from '../../components/Layout/Layout.js';
import UserDataForm from '../../components/UserDataForm/UseDataForm.js';
import UserPurchase from '../../components/UserPurchase/UserPurchase.js';
import UserPassword from '../../components/UserPassword/UserPassword.js';
function UserPage() {
  const [activeSection, setActiveSection] = useState('data');
  const navigate = useNavigate();

  const renderSection = () => {
    switch (activeSection) {
      case 'data':
        return <UserDataForm />;
      case 'purchase':
        return <UserPurchase />;
      case 'password':
        return <UserPassword />;
      default:
        return <UserDataForm />;
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/loginPanel');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Layout>
      <StyledUserPage active={activeSection}>
        <nav>
          <h1>My account</h1>
          <ul>
            <li
              onClick={() => {
                setActiveSection('data');
              }}
              style={{
                borderBottom:
                  activeSection === 'data' ? '1px solid black' : 'none',
              }}
            >
              My personal data
            </li>
            <li
              onClick={() => {
                setActiveSection('purchase');
              }}
              style={{
                borderBottom:
                  activeSection === 'purchase' ? '1px solid black' : 'none',
              }}
            >
              My purchase
            </li>

            <li
              onClick={() => {
                setActiveSection('password');
              }}
              style={{
                borderBottom:
                  activeSection === 'password' ? '1px solid black' : 'none',
              }}
            >
              Change password{' '}
            </li>
            <li onClick={handleLogout}>Log out </li>
          </ul>
        </nav>
        <div>{renderSection()}</div>
      </StyledUserPage>
    </Layout>
  );
}

export default UserPage;
