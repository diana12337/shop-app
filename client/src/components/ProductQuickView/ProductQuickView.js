import React, { useContext } from 'react';

import StyledQuickView from './ProductQuickView.styled.js';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button.js';
import cross from '../../img/cross.png';
import { quickViewFunction } from '../../context/QuickViewContext.js';
import { setQuickViewProduct } from '../../modules/database/database.actions.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
const ProductQuickView = ({ product }) => {
  const { addCartItem } = useContext(LocalStorageContext);

  const { quickView, showQuickView, showCartQuickView } = quickViewFunction();
  const dispatch = useDispatch();

  if (!quickView || !product) {
    return null;
  }

  const handleAddingProduct = () => {
    const newItem = {
      id: product.id,
      name: product.product_name,
      price: product.price,
      amount: 1,
      image: product.image,
    };

    addCartItem(newItem, product);

    showQuickView(false);
    dispatch(setQuickViewProduct(''));
    showCartQuickView(true);
  };
  return (
    <StyledQuickView>
      <section>
        <article>
          <div>
            {' '}
            <img src={product.image} alt={product.product_name} />
          </div>
          <div>
            <h1>{product.product_name}</h1>
            <p>{product.description}</p>
            <span>
              {' '}
              <p>Size:</p>
              <p>{product.size}</p>
            </span>
            <span>
              <p>Price:</p>
              <p>${Number(product.price).toFixed(2)}</p>
            </span>
          </div>
        </article>
        <div>
          <Button
            text="ADD PRODUCT"
            onClick={() => handleAddingProduct()}
            buttonStyle="defaultButton"
          />
          <Button
            background={cross}
            buttonStyle="buttonReturn"
            onClick={() => {
              showQuickView(false);
              dispatch(setQuickViewProduct(''));
            }}
          />
        </div>
      </section>
    </StyledQuickView>
  );
};

export default ProductQuickView;
