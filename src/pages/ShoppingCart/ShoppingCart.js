import React, { useContext } from 'react';
import Layout from '../../components/Layout/Layout.js';
import StyledShoppingCart from './ShoppingCart.styled.js';
import Button from '../../components/Button/Button.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
import ProductList from '../../components/ProductList/ProductList.js';
function ShoppingCart() {
  const { cart } = useContext(LocalStorageContext);

  return (
    <Layout>
      {cart.length > 0 ? (
        <StyledShoppingCart>
          <section>
            <ProductList />
            <article>
              {' '}
              <h2>Order summary</h2>
              <p>SHIPPING</p>
              <p>
                TOTAL:{' '}
                {cart.reduce(
                  (accumulator, product) =>
                    accumulator + product.price * product.amount,
                  0
                )}
              </p>
              <Button text="go to chechout" />
            </article>
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
