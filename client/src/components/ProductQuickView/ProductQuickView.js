import React, { useContext } from 'react';
/* import { useNavigate } from 'react-router-dom'; */
import StyledQuickView from './ProductQuickView.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button.js';
import cross from '../../img/cross.png';
import { quickViewFunction } from '../../context/QuickViewContext.js';
import { setQuickViewProduct } from '../../modules/database/database.actions.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
const ProductQuickView = ({ product /* onConfirm, onCancel */ }) => {
  const { addCartItem } = useContext(LocalStorageContext);
  /*   const navigate = useNavigate(); */
  const { quickView, showQuickView, showCartQuickView } = quickViewFunction();
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
      image: product.category.split(' ').join('-').toLowerCase(),
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
            <p>{Number(product.price).toFixed(2)}$</p>

            {/*    <p>
              <div>Ingredients</div>
              {product.ingredients.join(',')}
            </p> */}
          </div>
        </article>
        <div>
          <Button
            text="ADD PRODUCT"
            onClick={() => handleAddingProduct()}
            buttonStyle="buttonAddProduct"
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
