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

  /*   const addItem = (newItem) => {
    const existingProductIndex = productsLS.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingProductIndex >= 0) {
      const di = productsLS.map((productLS) =>
        productLS.id === product.id
          ? { ...productLS, amount: productLS.amount + 1 }
          : productLS
      );
      setItemsLS(di);
    } else {
      const newS = [...productsLS, newItem];
      setItemsLS(newS);
    }
  };
 */
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
            text="to shopping cart"
            onClick={() => handleAddingProduct()}

            /*     buttonStyle="buttonConfirmBox"  */
          />
          <Button
            text="return to shop"
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
