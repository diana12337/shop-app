import React, { useContext } from 'react';
import Layout from '../../components/Layout/Layout.js';
import StyledShoppingCart from './ShoppingCart.styled.js';
import Button from '../../components/Button/Button.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
function ShoppingCart() {
  const { cart, removeCartItem } = useContext(LocalStorageContext);
  const handleRemoveItem = (id) => {
    removeCartItem(id);
  };
  return (
    <Layout>
      {cart.length > 0 ? (
        <StyledShoppingCart>
          <div>My shopping cart</div>
          <section>
            <article>
              {' '}
              <table>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Total</th>
                  <th>ddd</th>
                </tr>
                {cart.map((product, index) => (
                  <tr key={index}>
                    {' '}
                    <td>{product.name}</td>
                    <td>{product.price}$</td>
                    <td>{product.amount}</td>
                    <td>{product.amount * product.price} $</td>
                    <td>
                      <Button
                        text="DELETE"
                        onClick={() => handleRemoveItem(product.id)}
                      />
                    </td>
                  </tr>
                ))}
              </table>
              <h2>Product list</h2>
            </article>
            <article>
              {' '}
              <h2>Order summary</h2>
              <p>subtotal</p>
              <p>shipping</p>
              <p>
                TOTAL:{' '}
                {cart.reduce(
                  (accumulator, product) => accumulator + product.price,
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
