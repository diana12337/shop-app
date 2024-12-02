import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import Button from '../Button/Button.js';
const PaymentOptions = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/cart/order-success',
      },
    });

    if (error) {
      setError(error.message);
    } else {
      console.log('Payment Intent:', paymentIntent);
    }
  };
  const handleCopyTestCard = () => {
    const cardNumberInput = elements.getElement('cardNumber');
    if (cardNumberInput) {
      cardNumberInput.update({ value: '4242424242424242' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="button" onClick={handleCopyTestCard}>
        Copy Test Card Number
      </button>
      <Button type="submit" disabled={!stripe} text="PAY" />

      {error && <div>{error}</div>}
    </form>
  );
};

export default PaymentOptions;
