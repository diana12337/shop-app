import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { db } from './firebase.js';
import { CartProvider } from './context/ShoppingCartContext.js';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';

import { setProducts } from '../src/modules/database/database.actions.js';
import Homepage from './pages/Homepage/Homepage.js';
import Product from './pages/Product/Product.js';
import { theme } from './theme/theme.js';
import { ThemeProvider } from 'styled-components';
import ResetStyle from './styled/Reset.js';
import AddressToDelivery from './pages/AddressToDelivery/AddressToDelivery.js';
import Checkout from './pages/Checkout/Checkout.js';
import { SharedFunctionProvider } from './context/QuickViewContext.js';
import CategoryPage from './pages/CategoryPage/CategoryPage.js';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.js';

import LocalStorageContext from './context/LocalStorageContext.js';
import UserPage from './pages/UserPage/UserPage.js';
import useStorage from './hook/hook.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import PurchaseTerms from './pages/PurchaseTerms/PurchaseTerms.js';
import PurchaseOptions from './pages/PurchaseOptions/PurchaseOptions.js';
import PurchaseConfirmation from './pages/PurchaseConfirmation/index.js';
import OurHistoryPage from './pages/OurHistoryPage/OurHistoryPage.js';

import About from './pages/About/About.js';
function App() {
  const dispatch = useDispatch();
  const [
    userData,
    user,
    setCartItems,
    findCartItemById,
    addCartItem,
    removeCartItem,
    subtractCartItem,
  ] = useStorage();

  useEffect(() => {
    console.log('app rendering');
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');

      const productsSnapshot = await getDocs(productsCollection);

      const productsList = productsSnapshot.docs.map((doc) => doc.data());

      dispatch(setProducts(productsList));
    };

    fetchProducts();
  }, [dispatch]);

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
          <CartProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/home" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/purchaseTerms" element={<PurchaseTerms />} />
                <Route path="/ourHistory" element={<OurHistoryPage />} />
                {/*      <Route exact path="/about"><About /> </Route> */}

                <Route
                  path="/category/:slug/:page"
                  element={<CategoryPage />}
                />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<ShoppingCart />} />

                <Route path="/userPanel" element={<UserPage />} />
                <Route path="/loginPanel" element={<LoginPage />} />
                <Route path="/cart/order" element={<PurchaseOptions />} />
                <Route path="/cart/checkout" element={<Checkout />} />
                <Route
                  path="/cart/checkout/address"
                  element={<AddressToDelivery />}
                />
                <Route
                  path="/cart/order-success"
                  element={<PurchaseConfirmation />}
                />
                {/*      <Route path="*" element={<NotFound/>} />*/}
              </Routes>
            </Router>
            <ResetStyle />
          </CartProvider>
        </ThemeProvider>
      </SharedFunctionProvider>
    </LocalStorageContext.Provider>
  );
}

export default App;
