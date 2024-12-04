import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import StyledProductList from './ProductList.styled.js';
import Button from '../Button/Button.js';
import { useSelector } from 'react-redux';
/* import bin from '../../img/bin.png'; */
import LocalStorageContext from '../../context/LocalStorageContext.js';
function ProductList() {
  const { cart, removeCartItem } = useContext(LocalStorageContext);
  const images = useSelector((state) => state.images);
  const handleRemoveItem = (id) => {
    removeCartItem(id);
  };
  console.log(images, cart);
  return (
    <StyledProductList>
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
        {cart.map((product, index) => (
          <tr key={index}>
            {' '}
            <td>
              <Link to={`/product/${product.id}`}>
                <div>
                  {images.map(
                    (image) =>
                      image.name === product.image && (
                        <img
                          key={image.id}
                          src={image.url}
                          alt={product.product_name}
                        />
                      )
                  )}
                  <p> {product.name}</p>{' '}
                </div>
              </Link>
            </td>
            <td>{product.price}$</td>
            <td>{product.amount}</td>
            <td>{product.amount * product.price} $</td>
            <td>
              <Button
                /*  background={bin} */
                text="REMOVE"
                onClick={() => handleRemoveItem(product.id)}
              />
            </td>
          </tr>
        ))}
      </table>
    </StyledProductList>
  );
}

export default ProductList;
