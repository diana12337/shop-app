import { React } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import StyledLoginPage from './LoginPage.styled.js';
import Layout from '../../components/Layout/Layout.js';
import LoginForm from '../../components/LoginForm/LoginForm.js';
function LoginPage() {
  return (
    <Layout>
      <StyledLoginPage>
        <LoginForm />
        <RegisterForm />
      </StyledLoginPage>
    </Layout>
  );
}

export default LoginPage;
