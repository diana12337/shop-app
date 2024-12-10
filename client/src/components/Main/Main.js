import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StyledMain from './Main.styled.js';
import ProductQuickView from '../ProductQuickView/ProductQuickView.js';
import Article from '../Article/Article.js';
import CartQuickView from '../CartQuickView/CartQuickView.js';
import Button from '../Button/Button.js';

function Main() {
  const quickviewProduct = useSelector((state) => state.quickViewProduct);
  const products = useSelector((state) => state.products);
  const images = useSelector((state) => state.images);
  const [visibleProducts, setVisibleProducts] = useState(8);

  const showMoreProducts = () => {
    setVisibleProducts((prevValue) => prevValue + 5);
  };

  return (
    <>
      <StyledMain>
        {products.length > 0 &&
          products
            .slice(0, visibleProducts)
            .map((product, index) => (
              <Article key={index} images={images} product={product} />
            ))}
        {visibleProducts < products.length && (
          <section>
            {' '}
            <Button text="SHOW MORE" onClick={showMoreProducts} />
          </section>
        )}
      </StyledMain>

      <ProductQuickView product={quickviewProduct} />
      <CartQuickView images={images} />
    </>
  );
}

export default Main;
