import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Hook to use the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [shipping, setShipping] = useState('4.99');
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    street: '',
    streetNumber: '',
    zipCode: '',
    city: '',
    errors: {},
  });

  return (
    <CartContext.Provider
      value={{
        shipping,
        setShipping,
        address,
        setAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
