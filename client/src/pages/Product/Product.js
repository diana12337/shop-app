import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.js';
import { useSelector, useDispatch } from 'react-redux';
import StyledProduct from './Product.styled.js';
import Button from '../../components/Button/Button.js';
import CartQuickView from '../../components/CartQuickView/CartQuickView.js';
import ProductCounter from '../../components/ProductCounter/ProductCounter.js';
import { getProduct } from '../../modules/database/database.actions.js';
import LocalStorageContext from '../../context/LocalStorageContext.js';
import { quickViewFunction } from '../../context/QuickViewContext.js';
function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const { showCartQuickView } = quickViewFunction();
  const currentProduct = useSelector((state) => state.quickViewProduct);
  useEffect(() => {
    dispatch(getProduct('products', id));
  }, [dispatch, id]);

  const handleDesc = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };
  const { addCartItem } = useContext(LocalStorageContext);

  const images = useSelector((state) => state.images);

  const handleAddingProduct = () => {
    const newItem = {
      id: currentProduct.id,
      name: currentProduct.product_name,
      price: currentProduct.price,
      amount: counter,
      image: currentProduct.category.split(' ').join('-').toLowerCase(),
    };

    addCartItem(newItem);
    showCartQuickView(true);
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
            <ProductCounter
              handleDesc={() => handleDesc()}
              handleAsc={() => setCounter(counter + 1)}
              state={counter}
            />
            <Button
              text="add to cart"
              buttonStyle="buttonAddProduct"
              onClick={() => handleAddingProduct()}
            />
          </div>
        </article>
      </StyledProduct>
      <CartQuickView images={images} />
    </Layout>
  );
}

export default ProductDetail;
