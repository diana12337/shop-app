import React /* , { useState } */ from 'react';
import StyledDeliveryOptions from './DeliveryOptions.styled.js';
import { useCart } from '../../context/ShoppingCartContext.js';
const DeliveryOptions = () => {
  const { shipping, setShipping } = useCart();

  const handleChange = (e) => {
    setShipping(e.target.value);
  };
  return (
    <StyledDeliveryOptions>
      <h3>Delivery Options</h3>
      <div>
        <input
          type="radio"
          id="standard"
          name="deliveryOptions"
          value="4.99"
          checked={shipping === '4.99'}
          onChange={handleChange}
        />
        <label htmlFor="standard">
          {' '}
          <p> Standard delivery (1-2 days) </p>
          <p>$4,99</p>
        </label>

        <input
          type="radio"
          id="express"
          name="deliveryOptions"
          value="8.99"
          checked={shipping === '8.99'}
          onChange={handleChange}
        />
        <label htmlFor="express">
          {' '}
          <p>Express delivery (next day)</p> <p>$8,99</p>
        </label>
      </div>
    </StyledDeliveryOptions>
  );
};

export default DeliveryOptions;
