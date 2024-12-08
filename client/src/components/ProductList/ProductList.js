import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import StyledProductList from './ProductList.styled.js';
import Button from '../Button/Button.js';

import LocalStorageContext from '../../context/LocalStorageContext.js';
import ProductCounter from '../ProductCounter/ProductCounter.js';
function ProductList() {
  const { userData, removeCartItem } = useContext(LocalStorageContext);
  const { addCartItem, subtractCartItem } = useContext(LocalStorageContext);
  const handleRemoveItem = (id) => {
    removeCartItem(id);
  };
  const handleAsc = (product) => {
    addCartItem(product);
  };

  const handleDesc = (product) => {
    subtractCartItem(product);
  };
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
        {userData.map((product, index) => (
          <tr key={index}>
            {' '}
            <td>
              <Link to={`/product/${product.id}`}>
                <div>
                  <img
                    /*     key={image.id} */
                    src={product.image}
                    alt={product.product_name}
                  />
                  <p> {product.name}</p>{' '}
                </div>
              </Link>
            </td>
            <td>{product.price}$</td>
            <td>
              <div>
                <ProductCounter
                  state={product.amount}
                  handleAsc={() => handleAsc(product)}
                  handleDesc={() => handleDesc(product)}
                />
              </div>
            </td>
            <td>{product.amount * product.price} $</td>
            <td>
              <Button
                text="REMOVE"
                buttonStyle="buttonRemove"
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
