import React from 'react';
import { useSelector } from 'react-redux';

import StyledMain from './Main.styled.js';
import ProductQuickView from '../ProductQuickView/ProductQuickView.js';
import Article from '../Article/Article.js';

/* import { quickViewFunction } from '../context/QuickViewContext.js'; */
function Main() {
  const quickviewProduct = useSelector((state) => state.quickViewProduct);
  const products = useSelector((state) => state.products);
  const images = useSelector((state) => state.images);
  /* 
  const { showQuickView } = quickViewFunction(); */

  return (
    <>
      <StyledMain>
        {products.length > 0 &&
          products.map((product, index) => (
            <Article key={index} images={images} product={product} />
          ))}
      </StyledMain>
      <ProductQuickView
        product={quickviewProduct}
        message="Are you sure you want to remove this item?"
      />
    </>
  );
}

export default Main;
