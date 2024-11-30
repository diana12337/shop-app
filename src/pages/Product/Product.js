import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.js';
import { useSelector, useDispatch } from 'react-redux';
import StyledProduct from './Product.styled.js';
import Button from '../../components/Button/Button.js';
import ProductCounter from '../../components/ProductCounter/ProductCounter.js';
import { getProduct } from '../../modules/database/database.actions.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.quickViewProduct);
  useEffect(() => {
    dispatch(getProduct('products', id));
  }, [dispatch, id]);

  /*   if (!currentProduct) {
    return <div>Loading...</div>;
  } */

  const { addCartItem } = useContext(LocalStorageContext);
  /*   const products = useSelector((state) => state.products); */
  const images = useSelector((state) => state.images);

  /*  const product = products.find((p) => p.id === Number(id)); */
  console.log(currentProduct.description, id, 'ssprodussssssssscts');
  const handleAddingProduct = () => {
    const newItem = {
      id: currentProduct.id,
      name: currentProduct.product_name,
      price: currentProduct.price,
      amount: 1,
    };

    addCartItem(newItem);
  };
  return (
    <Layout>
      <StyledProduct>
        <header>
          {images.map(
            (image) =>
              image.name === currentProduct.image && (
                <img
                  key={image.id}
                  src={image.url}
                  alt={currentProduct.product_name}
                />
              )
          )}{' '}
        </header>
        <article>
          <h1>{currentProduct.product_name}</h1>
          <p>{currentProduct.description}</p>
          <p>
            <span>Ingredients</span>
            {currentProduct.ingredients}
          </p>

          <p>Price:{currentProduct.price}$</p>
          <div>
            <ProductCounter />
            <Button
              text="add to cart"
              buttonStyle="buttonAddProduct"
              onClick={() => handleAddingProduct()}
            />
          </div>
        </article>
      </StyledProduct>
    </Layout>
  );
}

export default ProductDetail;
