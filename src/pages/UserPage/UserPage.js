import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.js';
import StyledUserPage from './UserPage.styled.js';
import Layout from '../../components/Layout/Layout.js';
import UserDataForm from '../../components/UserDataForm/UseDataForm.js';
import UserPassword from '../../components/UserPassword/UserPassword.js';
function UserPage() {
  const [activeSection, setActiveSection] = useState('data');
  const navigate = useNavigate();

  const renderSection = () => {
    switch (activeSection) {
      case 'data':
        return <UserDataForm />;
      case 'password':
        return <UserPassword />;
      default:
        return <UserDataForm />;
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/loginPanel'); // Redirect to login panel after logging out
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Layout>
      <StyledUserPage>
        <nav>
          <h1>My account</h1>
          <ul>
            <li
              onClick={() => {
                setActiveSection('data');
              }}
            >
              My personal data
            </li>
            <li
              onClick={() => {
                setActiveSection('purchase');
              }}
            >
              My purchase
            </li>
            <li
              onClick={() => {
                setActiveSection('adress');
              }}
            >
              My adress{' '}
            </li>
            <li
              onClick={() => {
                setActiveSection('password');
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
