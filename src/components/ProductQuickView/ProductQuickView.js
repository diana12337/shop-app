import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledQuickView from './ProductQuickView.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button.js';
import { quickViewFunction } from '../../context/QuickViewContext.js';
import { setQuickViewProduct } from '../../modules/database/database.actions.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
const ProductQuickView = ({ product /* onConfirm, onCancel */ }) => {
  const { addCartItem } = useContext(LocalStorageContext);
  const navigate = useNavigate();
  const { quickView, showQuickView } = quickViewFunction();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  if (!quickView || !product) {
    return null;
  }

  const handleAddingProduct = () => {
    const newItem = {
      id: product.id,
      name: product.product_name,
      price: product.price,
      amount: 1,
    };

    addCartItem(newItem, product);

    showQuickView(false);
    dispatch(setQuickViewProduct(''));

    navigate('/cart');
  };
  return (
    <StyledQuickView>
      <section>
        <article>
          <div>
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
          </div>
          <div>
            <h1>{product.product_name}</h1>
            <p>{product.description}</p>
            <p>
              <div>Price</div>
              {Number(product.price).toFixed(2)}$
            </p>

            <p>
              <div>Ingredients</div>
              {product.ingredients.join(',')}
            </p>
          </div>
        </article>
        <div>
          <Button
            text="ADD PRODUCT"
            onClick={() => handleAddingProduct()}
            buttonStyle="buttonAddProduct"
          />
          <Button
            text="RETURN TO SHOP"
            buttonStyle="buttonAddProduct"
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
