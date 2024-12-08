/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect, useCallback } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
/* import { auth } from '../../firebase.js'; */
import Button from '../Button/Button.js';
/* import Notification from '../../Notification/Notification.js'; */
import StyledPaymentOptions from './PaymentOptions.styled.js';
import { auth } from '../../firebase.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
import { useCart } from '../../context/ShoppingCartContext.js';
import CopyButton from '../CopyButton/CopyButton.js';
const PaymentOptions = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const { userData } = useContext(LocalStorageContext);
  const { shipping } = useCart();
  const userId = auth.currentUser ? auth.currentUser.uid : 'unknown';

  const savePurchaseData = useCallback(async (paymentIntent) => {
    const purchaseData = {
      userId: userId,
      cart: userData,
      shipping: shipping,
      amount: paymentIntent.amount,
    };

    try {
      console.log(
        'Sending purchase data:',
        JSON.stringify(purchaseData, null, 2)
      );

      const response = await fetch('http://localhost:4242/api/save-purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchaseData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Purchase data saved:', data);
    } catch (error) {
      console.error('Error saving purchase data:', error);
    }
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      console.log('Submitting Payment');
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required', // Prevent automatic redirection
      });

      if (error) {
        setError(error.message);
      } else {
        await savePurchaseData(paymentIntent);
        navigate('/cart/order-success'); // Manually navigate to the success page
      }
    },
    [stripe, elements, savePurchaseData, navigate]
  );

  return (
    <StyledPaymentOptions>
      <form onSubmit={handleSubmit}>
        <PaymentElement />

        <Button
          type="submit"
          buttonStyle="buttonAddProduct"
          /* disabled={!stripe} */
          text="PAY"
        />

        {/*   {error && <div>{error}</div>} */}
      </form>

      <section>
        <div>
          <h3>Copy card number for testing payment</h3>
          <div>
            <p>Success payment: 4242 4242 4242 4242</p>
            <CopyButton text="success payment" number="4242 4242 4242 4242" />
            <p>Decline payment: 4000 000 000 000 002</p>
            <CopyButton text="decline payment" number="4000 000 000 000 002" />
          </div>
        </div>
        {/*    <div>
          <p>4000 000 000 000 002</p>
          <CopyButton text="decline payment" number="4000 000 000 000 002" />
        </div> */}
      </section>
    </StyledPaymentOptions>
  );
};

export default PaymentOptions;
