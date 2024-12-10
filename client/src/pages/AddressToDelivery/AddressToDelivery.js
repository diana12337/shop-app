import { React } from 'react';

import Layout from '../../components/Layout/Layout.js';
import AddressForm from '../../components/AddressForm/AddressForm.js';
import StyledAddressToDeliver from './AddressToDeliver.styled.js';

function AddressToDelivery() {
  return (
    <Layout>
      <StyledAddressToDeliver>
        <h1>CHECKOUT</h1>

        <section>
          <AddressForm />
        </section>
      </StyledAddressToDeliver>
    </Layout>
  );
}

export default AddressToDelivery;
