import React /* , { useState } */ from 'react';
import StyledDeliveryOptions from './DeliveryOptions.styled.js';

const DeliveryOptions = () => {
  return (
    <StyledDeliveryOptions>
      <h3>Delivery Options</h3>
      <ul>
        <li>
          {' '}
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label htmlFor="css">
            <p> Shop delivery</p>

            <p>1-2 days</p>
            <p>4,99$</p>
          </label>
        </li>
        <li>
          {' '}
          <div>
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />{' '}
            <label htmlFor="javascript">Kurier</label>
          </div>
        </li>
      </ul>
    </StyledDeliveryOptions>
  );
};

export default DeliveryOptions;
