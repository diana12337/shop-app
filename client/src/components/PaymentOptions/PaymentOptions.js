import React, { useContext, useCallback } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.js';
import StyledPaymentOptions from './PaymentOptions.styled.js';
import { auth } from '../../firebase.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
import { useCart } from '../../context/ShoppingCartContext.js';
import CopyButton from '../CopyButton/CopyButton.js';

const PaymentOptions = () => {
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();
  const { userData, setCartItems } = useContext(LocalStorageContext);
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

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      });

      if (error) {
        console.error('Error saving purchase data:', error);
      } else {
        await savePurchaseData(paymentIntent);
        setCartItems([]);
        navigate('/cart/order-success');
      }
    },
    [stripe, elements, savePurchaseData, navigate]
  );

  return (
    <StyledPaymentOptions>
      <form onSubmit={handleSubmit}>
        <PaymentElement />

        <Button type="submit" buttonStyle="defaultButton" text="PAY" />
      </form>

      <section>
        <div>
          <h3>Copy card number for testing payment</h3>
          <article>
            <p>Success payment: 4242 4242 4242 4242</p>
            <CopyButton text="success payment" number="4242 4242 4242 4242" />
            <p>Decline payment: 4000 000 000 000 002</p>
            <CopyButton text="decline payment" number="4000 000 000 000 002" />
          </article>
        </div>
      </section>
    </StyledPaymentOptions>
  );
};

export default PaymentOptions;
