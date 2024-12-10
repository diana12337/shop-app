import React, { useContext } from 'react';
import Layout from '../../components/Layout/Layout.js';
import { useCart } from '../../context/ShoppingCartContext.js';
import StyledShoppingCart from './ShoppingCart.styled.js';
import { useNavigate } from 'react-router-dom';
import DeliveryOptions from '../../components/DeliveryOptions/DeliveryOptions.js';
import Button from '../../components/Button/Button.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
import ProductList from '../../components/ProductList/ProductList.js';

function ShoppingCart() {
  const { shipping } = useCart();

  const { userData, user } = useContext(LocalStorageContext);
  const navigate = useNavigate();
  const handleClick = () => {
    if (user) {
      navigate('/cart/checkout/address');
    } else {
      navigate('/cart/checkout/');
    }
  };
  return (
    <Layout>
      {userData.length > 0 ? (
        <StyledShoppingCart>
          <h1>MY BAG</h1>
          <section>
            <ProductList />
            <div>
              <DeliveryOptions />
              <article>
                {' '}
                <h2>Order summary</h2>
                <p>
                  Subtotal: $
                  {userData
                    .reduce(
                      (accumulator, product) =>
                        accumulator + product.price * product.amount,
                      0
                    )
                    .toFixed(2)}
                </p>
                <p>Shipping: $ {shipping}</p>
                <span>
                  TOTAL: $
                  {(
                    userData.reduce(
                      (accumulator, product) =>
                        accumulator + product.price * product.amount,
                      0
                    ) + Number(shipping)
                  ).toFixed(2)}
                </span>
                <Button
                  text="GO TO CHECKOUT"
                  buttonStyle="defaultButton"
                  onClick={() => handleClick()}
                />
              </article>
            </div>
          </section>
        </StyledShoppingCart>
      ) : (
        <StyledShoppingCart>
          <main>
            <h3>NO ITEMS IN SHOPPING CART</h3>
            <Button
              text="RETURN TO SHOP"
              buttonStyle="defaultButton"
              onClick={() => navigate('/')}
            />
          </main>
        </StyledShoppingCart>
      )}
    </Layout>
  );
}

export default ShoppingCart;
