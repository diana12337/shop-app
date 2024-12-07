import { React, useEffect, useState, useContext } from 'react';

import StyledPurchaseOptions from './PurchaseOptions.styled.js';
import Layout from '../../components/Layout/Layout.js';
import { useCart } from '../../context/ShoppingCartContext.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { auth } from '../../firebase.js';
const stripePromise = loadStripe(
  'pk_test_51QRDLCEE8OTGwyjyBMGR9a3dnDkT4Sm4O08vyKsblzvtTrVP8Vd0dIoY3KbYtZ4adzjzS2azZsxKcBKOyoeTYJIM00hMXzdBq1'
);
function PurchaseOptions() {
  const [clientSecret, setClientSecret] = useState('');
  const { cart } = useContext(LocalStorageContext);
  const { shipping } = useCart();

  const userId = auth.currentUser ? auth.currentUser.uid : 'unknown';
  console.log(userId, 'ssss');
  /*   useEffect(() => {
 
    fetch('http://localhost:4242/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ amount: 1000 }] }), 
    })
      .then((response) => response.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error fetching client secret:', error));
  }, []);
 */

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        if (!cart || !Array.isArray(cart) || cart.length === 0) {
          console.log('Cart is empty or not defined yet');
          return;
        }
        const response = await fetch(
          'http://localhost:4242/api/create-payment-intent',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              cart,
              shipping,
              userId: userId,
            }),
          }
        );

        const data = await response.json();
        console.log(data, 'hereeeeeeeeeeee');
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };

    fetchClientSecret();
  }, []);

  const options = {
    clientSecret,
  };
  return (
    <Layout>
      <StyledPurchaseOptions>
        <div>
          <article>
            {' '}
            <h2>Order summary</h2>
            <p>
              Subtotal: $
              {cart
                .reduce(
                  (accumulator, product) =>
                    accumulator + product.price * product.amount,
                  0
                )
                .toFixed(2)}
            </p>
            <p>Shipping: $ {shipping}</p>
            <span>
              TOTAL: $
              {(
                cart.reduce(
                  (accumulator, product) =>
                    accumulator + product.price * product.amount,
                  0
                ) + Number(shipping)
              ).toFixed(2)}
            </span>
          </article>
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <PaymentOptions />
            </Elements>
          )}
        </div>
      </StyledPurchaseOptions>
    </Layout>
  );
}

export default PurchaseOptions;

/* 'your_public_stripe_key_here' */
