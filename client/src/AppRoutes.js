import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.js';
import Product from './pages/Product/Product.js';
import AddressToDelivery from './pages/AddressToDelivery/AddressToDelivery.js';
import Checkout from './pages/Checkout/Checkout.js';
import CategoryPage from './pages/CategoryPage/CategoryPage.js';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.js';
import UserPage from './pages/UserPage/UserPage.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import PurchaseTerms from './pages/PurchaseTerms/PurchaseTerms.js';
import PaymentPage from './pages/PaymentPage/PaymentPage.js';
import PurchaseConfirmation from './pages/PurchaseConfirmation/index.js';
import OurHistoryPage from './pages/OurHistoryPage/OurHistoryPage.js';
import About from './pages/About/About.js';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route exact path="/home" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/purchaseTerms" element={<PurchaseTerms />} />
    <Route path="/ourHistory" element={<OurHistoryPage />} />
    <Route path="/category/:slug/:page" element={<CategoryPage />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/cart" element={<ShoppingCart />} />
    <Route path="/userPanel" element={<UserPage />} />
    <Route path="/loginPanel" element={<LoginPage />} />
    <Route path="/cart/order" element={<PaymentPage />} />
    <Route path="/cart/checkout" element={<Checkout />} />
    <Route path="/cart/checkout/address" element={<AddressToDelivery />} />
    <Route path="/cart/order-success" element={<PurchaseConfirmation />} />
  </Routes>
);

export default AppRoutes;
