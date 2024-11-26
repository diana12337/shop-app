import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { db } from './firebase.js';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { setImages } from '../src/modules/database/database.actions.js';
import { setProducts } from '../src/modules/database/database.actions.js';
import Homepage from './pages/Homepage/Homepage.js';
import Product from './pages/Product/Product.js';
import { theme } from './theme/theme.js';
import { ThemeProvider } from 'styled-components';
import ResetStyle from './styled/Reset.js';
import { SharedFunctionProvider } from './context/QuickViewContext.js';
import CategoryPage from './pages/CategoryPage/CategoryPage.js';
import { fetchData } from './helpers/imagesProvider.js';
import LocalStorageContext from './context/LocalStorageContext.js';
import useStorage from './hook/hook.js';
function App() {
  const dispatch = useDispatch();
  const [
    productsLS,
    setItemsLS,
    findProductById,
    updateProductAmount,
    addItem,
  ] = useStorage('shoppingCart');
  useEffect(() => {
    console.log('app rendering');
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');

      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => doc.data());

      dispatch(setProducts(productsList));
    };

    const fetchImages = async () => {
      /*  const response = await fetch('http://localhost:3001/images'); */
      /*  const data = await response.json(); */
      const images = await fetchData();
      dispatch(setImages(images));
    };

    fetchProducts();
    fetchImages();
  }, [dispatch]);
  return (
    <LocalStorageContext.Provider
      value={{
        productsLS,
        setItemsLS,
        findProductById,
        updateProductAmount,
        addItem,
      }}
    >
      <SharedFunctionProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/home" element={<Homepage />} />
              {/*      <Route exact path="/about"><About /> </Route> */}

              <Route path="/category/:slug/:page" element={<CategoryPage />} />
              <Route path="/product/:id" element={<Product />} />
              {/*      <Route path="*" element={<NotFound/>} />*/}
            </Routes>
          </Router>
          <ResetStyle />
        </ThemeProvider>
      </SharedFunctionProvider>
    </LocalStorageContext.Provider>
  );
}

export default App;
