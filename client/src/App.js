import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase.js';
import { setProducts } from '../src/modules/database/database.actions.js';
import Providers from './Providers.js';
import AppRoutes from './AppRoutes.js';
import ResetStyle from './styled/Reset.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => doc.data());
      dispatch(setProducts(productsList));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <Providers>
      <Router>
        <AppRoutes />
      </Router>
      <ResetStyle />
    </Providers>
  );
}

export default App;
