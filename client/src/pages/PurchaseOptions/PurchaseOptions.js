import { React, useEffect, useState } from 'react';

import StyledPurchaseOptions from './PurchaseOptions.styled.js';
import Layout from '../../components/Layout/Layout.js';

import PaymentOptions from '../../components/PaymentOptions/PaymentOptions.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(
  'pk_test_51QRDLCEE8OTGwyjyBMGR9a3dnDkT4Sm4O08vyKsblzvtTrVP8Vd0dIoY3KbYtZ4adzjzS2azZsxKcBKOyoeTYJIM00hMXzdBq1'
);
function PurchaseOptions() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Fetch the clientSecret from the server
    fetch('http://localhost:4242/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ amount: 1000 }] }), // Adjust as needed
    })
      .then((response) => response.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error fetching client secret:', error));
  }, []);

  const options = {
    clientSecret,
  };
  return (
    <Layout>
      <StyledPurchaseOptions>
        {clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <PaymentOptions />
          </Elements>
        )}
      </StyledPurchaseOptions>
    </Layout>
  );
}

export default PurchaseOptions;
