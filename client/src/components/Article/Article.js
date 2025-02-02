import React, { useContext } from 'react';

import StyledArticle from './Article.styled.js';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button.js';
import search from '../../img/search.png';
import { quickViewFunction } from '../../context/QuickViewContext.js';
import { getProduct } from '../../modules/database/database.actions.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';

function Article({ product }) {
  const { showQuickView, showCartQuickView } = quickViewFunction();
  const { addCartItem } = useContext(LocalStorageContext);

  const dispatch = useDispatch();
  const handleQuickView = (product) => {
    showQuickView(true);
    dispatch(getProduct('products', product.id));
  };
  const handleCartQuickView = () => {
    const newItem = {
      id: product.id,
      name: product.product_name,
      price: product.price,
      amount: 1,
      image: product.image,
    };

    addCartItem(newItem, product);
    showCartQuickView(true);
  };

  return (
    <StyledArticle>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.product_name} />
      </Link>
      <Link to={`/category/${product.category.split(' ').join('-')}/1`}>
        <h3> {product.category}</h3>
      </Link>
      <h2>{product.product_name}</h2>

      <p>{Number(product.price).toFixed(2)} $</p>
      <div>
        <Button
          text="ADD PRODUCT"
          buttonStyle="defaultButton"
          onClick={() => handleCartQuickView()}
        />
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
