import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../src/modules/database/database.actions.js';
import Providers from './Providers.js';
import AppRoutes from './AppRoutes.js';
import ResetStyle from './styled/Reset.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts('products'));
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
