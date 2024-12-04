import React from 'react';
import { useSelector } from 'react-redux';

import StyledMain from './Main.styled.js';
import ProductQuickView from '../ProductQuickView/ProductQuickView.js';
import Article from '../Article/Article.js';
import CartQuickView from '../CartQuickView/CartQuickView.js';

function Main() {
  const quickviewProduct = useSelector((state) => state.quickViewProduct);
  const products = useSelector((state) => state.products);
  const images = useSelector((state) => state.images);

  return (
    <>
      <StyledMain>
        {products.length > 0 &&
          products.map((product, index) => (
            <Article key={index} images={images} product={product} />
          ))}
      </StyledMain>
      <ProductQuickView product={quickviewProduct} />
      <CartQuickView images={images} />
    </>
  );
}

export default Main;
