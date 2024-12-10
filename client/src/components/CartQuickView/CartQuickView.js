import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import StyledCartView from './CartQuickView.styled.js';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button.js';
import cross from '../../img/cross.png';
import { quickViewFunction } from '../../context/QuickViewContext.js';
import { setQuickViewCart } from '../../modules/database/database.actions.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';

const CartQuickView = () => {
  const navigate = useNavigate();
  const { cartQuickView, showCartQuickView } = quickViewFunction();
  const { userData } = useContext(LocalStorageContext);
  const dispatch = useDispatch();

  if (!cartQuickView) {
    return null;
  }

  const handleAddingProduct = () => {
    showCartQuickView(false);
    dispatch(setQuickViewCart(''));

    navigate('/cart');
  };
  return (
    <StyledCartView $expanded={cartQuickView}>
      <section>
        <article>
          <div>
            <h3>Product added to cart</h3>
            <h1>MY BAG</h1>
            <h4>
              {' '}
              {userData.reduce(
                (accumulator, product) => accumulator + product.amount,
                0
              )}{' '}
              items
            </h4>
            <ul>
              {userData.length > 0 &&
                userData.map((product, index) => (
                  <Link to={`/product/${product.id}`} key={index}>
                    <li>
                      <img src={product.image} alt={product.name} />

                      <div>
                        <h2>{product.name}</h2>
                        <p>
                          {product.price.toFixed(2)}$ x {product.amount}
                        </p>
                      </div>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </article>
        <h2>
          TOTAL: $
          {userData
            .reduce(
              (accumulator, product) =>
                accumulator + product.price * product.amount,
              0
            )
            .toFixed(2)}{' '}
        </h2>
        <div>
          <Button
            text="GO TO CART"
            onClick={(product) => handleAddingProduct(product)}
            buttonStyle="defaultButton"
          />
          <Button
            background={cross}
            buttonStyle="buttonReturn"
            onClick={() => {
              showCartQuickView(false);
              dispatch(setQuickViewCart(''));
            }}
          />
        </div>{' '}
      </section>
    </StyledCartView>
  );
};

export default CartQuickView;
