import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import StyledProductList from './ProductList.styled.js';
import Button from '../Button/Button.js';
import { useSelector } from 'react-redux';
import LocalStorageContext from '../../context/LocalStorageContext.js';
function ProductList() {
  const { cart, removeCartItem } = useContext(LocalStorageContext);
  const images = useSelector((state) => state.images);
  const handleRemoveItem = (id) => {
    removeCartItem(id);
  };
  console.log(images);
  return (
    <StyledProductList>
      <h2>PRODUCT LIST</h2>{' '}
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
                {product.name}{' '}
              </Link>
            </td>
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
    </StyledProductList>
  );
}

export default ProductList;
