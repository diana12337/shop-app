import { React } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import StyledLoginPage from './LoginPage.styled.js';
import Layout from '../../components/Layout/Layout.js';
import LoginForm from '../../components/LoginForm/LoginForm.js';
function LoginPage() {
  return (
    <StyledLoginPage>
      <Layout>
        <RegisterForm />
        <LoginForm />
      </Layout>
    </StyledLoginPage>
  );
}

export default LoginPage;
