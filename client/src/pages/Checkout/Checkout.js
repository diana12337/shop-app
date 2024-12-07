import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledCheckout from './Checkout.styled.js';
import Layout from '../../components/Layout/Layout.js';
import LoginForm from '../../components/LoginForm/LoginForm.js';

import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import Button from '../../components/Button/Button.js';

function LoginPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledCheckout>
        <h1>CHECKOUT</h1>

        <section>
          <LoginForm path="/cart/checkout/address" />
          <RegisterForm path="/cart/checkout/address" />

          <div>
            <h1>Continue as a guest</h1>
            <p>In order to </p>
            <Button
              text="CONTINUE"
              buttonStyle="buttonAddProduct"
              onClick={() => {
                navigate('/cart/checkout/address');
              }}
            />
          </div>
        </section>
      </StyledCheckout>
    </Layout>
  );
}

export default LoginPage;
