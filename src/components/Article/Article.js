import React from 'react';

import StyledArticle from './Article.styled.js';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button.js';
import search from '../../img/search.png';
import { quickViewFunction } from '../../context/QuickViewContext.js';
import { getProduct } from '../../modules/database/database.actions.js';

function Article({ images, product }) {
  const { showQuickView } = quickViewFunction();
  const dispatch = useDispatch();
  const handleQuickView = (product) => {
    showQuickView(true);
    dispatch(getProduct('products', product.id));
  };

  return (
    <StyledArticle>
      <Link to={`/product/${product.id}`}>
        {images.map(
          (image) =>
            image.name === product.image && (
              <img key={image.id} src={image.url} alt={product.product_name} />
            )
        )}{' '}
        <h2>{product.product_name}</h2>
      </Link>
      <p>{product.price} $</p>
      <div>
        <Button text="add to cart" buttonStyle="buttonAddProduct" />
        <Button
          buttonStyle="buttonQuickView"
          background={search}
          onClick={() => handleQuickView(product)}
        />
      </div>
    </StyledArticle>
  );
}
export default Article;
