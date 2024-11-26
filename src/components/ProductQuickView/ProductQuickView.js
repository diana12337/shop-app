import React from 'react';
import StyledQuickView from './ProductQuickView.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button.js';
import { quickViewFunction } from '../context/QuickViewContext.js';
import { setQuickViewProduct } from '../../modules/database/database.actions.js';
const ProductQuickView = ({ product /* onConfirm, onCancel */ }) => {
  const { quickView, showQuickView } = quickViewFunction();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  if (!quickView || !product) {
    return null;
  }

  return (
    <StyledQuickView>
      <section>
        <article>
          {' '}
          {images.map(
            (image) =>
              image.name === product.image && (
                <img
                  key={image.id}
                  src={image.url}
                  alt={product.product_name}
                />
              )
          )}{' '}
          <h1>{product.product_name}</h1>
          <p>{product.description}</p>
          <p>
            <span>Ingredients</span>
            {product.ingredients}
          </p>
          <p>Price:{product.price}$</p>
        </article>
        <div>
          <Button
            text="Confirm"
            /*   onClick={onConfirm}
            buttonStyle="buttonConfirmBox" */
          />
          <Button
            text="Cancel"
            /*  buttonStyle="buttonConfirmBox"  */
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
