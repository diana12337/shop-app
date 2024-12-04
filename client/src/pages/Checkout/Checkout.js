import { React } from 'react';

import StyledCheckout from './Checkout.styled.js';
import Layout from '../../components/Layout/Layout.js';

import AddressForm from '../../components/AddressForm/AddressForm.js';
/* import LoginForm from '../../components/LoginForm/LoginForm.js'; */
function LoginPage() {
  return (
    <Layout>
      <StyledCheckout>
        <h1>CHECKOUT</h1>
        {/*  <LoginForm /> */}
        <section>
          <AddressForm />
        </section>
      </StyledCheckout>
    </Layout>
  );
}

export default LoginPage;
