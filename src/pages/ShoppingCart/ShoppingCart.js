import React, { useContext } from 'react';
import Layout from '../../components/Layout/Layout.js';
import StyledShoppingCart from './ShoppingCart.styled.js';
import Button from '../../components/Button/Button.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
function ShoppingCart() {
  const { productsLS, removeItem } = useContext(LocalStorageContext);
  const handleRemoveItem = (id) => {
    console.log(id, 'ddd');
    removeItem(id);
  };
  return (
    <Layout>
      {productsLS.length > 0 ? (
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
                {productsLS.map((product, index) => (
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
                {productsLS.reduce(
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
