import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './context/ShoppingCartContext.js';
import { SharedFunctionProvider } from './context/QuickViewContext.js';
import LocalStorageContext from './context/LocalStorageContext.js';
import { theme } from './theme/theme.js';
import useStorage from './hook/hook.js';

const Providers = ({ children }) => {
  const [
    userData,
    user,
    setCartItems,
    findCartItemById,
    addCartItem,
    removeCartItem,
    subtractCartItem,
  ] = useStorage();

  return (
    <LocalStorageContext.Provider
      value={{
        userData,
        user,
        setCartItems,
        findCartItemById,
        addCartItem,
        removeCartItem,
        subtractCartItem,
      }}
    >
      <SharedFunctionProvider>
        <ThemeProvider theme={theme}>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </SharedFunctionProvider>
    </LocalStorageContext.Provider>
  );
};

export default Providers;
