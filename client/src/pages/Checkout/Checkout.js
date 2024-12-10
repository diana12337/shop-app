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

          <article>
            <h1>CONTINUE AS A GUEST</h1>
            <p>
              Proceed without signing in to quickly complete your purchase.{' '}
            </p>
            <Button
              text="CONTINUE"
              buttonStyle="defaultButton"
              onClick={() => {
                navigate('/cart/checkout/address');
              }}
            />
          </article>
        </section>
      </StyledCheckout>
    </Layout>
  );
}

export default LoginPage;
