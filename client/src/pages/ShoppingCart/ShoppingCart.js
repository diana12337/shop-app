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

  const { cart } = useContext(LocalStorageContext);
  const navigate = useNavigate();

  return (
    <Layout>
      {cart.length > 0 ? (
        <StyledShoppingCart>
          <h1>MY BAG</h1>
          <section>
            <ProductList />
            <div>
              <DeliveryOptions /* handleChange={handleChange} */ />
              <article>
                {' '}
                <h2>Order summary</h2>
                <p>
                  Subtotal: $
                  {cart
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
                    cart.reduce(
                      (accumulator, product) =>
                        accumulator + product.price * product.amount,
                      0
                    ) + Number(shipping)
                  ).toFixed(2)}
                </span>
                <Button
                  text="GO TO CHECKOUT"
                  buttonStyle="buttonAddProduct"
                  onClick={() => {
                    navigate('/cart/checkout');
                  }}
                />
              </article>
            </div>
          </section>
        </StyledShoppingCart>
      ) : (
        <div>no items in shopping cart</div>
      )}
    </Layout>
  );
}
/*   if (notFound) {
    return <NotFound />;
  }
 */

export default ShoppingCart;
