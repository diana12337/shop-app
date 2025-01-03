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
  const [visibleInfo, setVisibleInfo] = useState(null);

  const showInfo = (info) => {
    setVisibleInfo(visibleInfo === info ? null : info);
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const { showCartQuickView } = quickViewFunction();
  const { addCartItem } = useContext(LocalStorageContext);

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

  const handleAddingProduct = () => {
    const newItem = {
      id: currentProduct.id,
      name: currentProduct.product_name,
      price: currentProduct.price,
      amount: counter,
      image: currentProduct.image,
    };

    addCartItem(newItem);
    showCartQuickView(true);
  };
  return (
    <Layout>
      <StyledProduct>
        <main>
          <header>
            <img src={currentProduct.image} alt={currentProduct.product_name} />
          </header>
          <article>
            <h1>{currentProduct.product_name}</h1>
            <p>{currentProduct.description}</p>

            <span>
              {' '}
              <p>Price:</p>
              <p>${currentProduct && currentProduct.price.toFixed(2)}</p>
            </span>
            <span>
              <p>Size:</p>
              <p>{currentProduct.size}</p>
            </span>

            <div>
              <ProductCounter
                handleDesc={() => handleDesc()}
                handleAsc={() => setCounter(counter + 1)}
                state={counter}
              />
              <Button
                text="add to cart"
                buttonStyle="defaultButton"
                onClick={() => handleAddingProduct()}
              />
            </div>

            <section>
              <Button
                onClick={() => showInfo('ingredients')}
                buttonStyle="toggleCart"
                text={
                  visibleInfo === 'ingredients'
                    ? 'Hide Ingedients'
                    : 'Show Ingredients'
                }
              />
              {visibleInfo === 'ingredients' && (
                <div>
                  <p> {currentProduct.ingredients.join(',')} </p>
                </div>
              )}
              <Button
                onClick={() => showInfo('details')}
                buttonStyle="toggleCart"
                text={
                  visibleInfo === 'details' ? 'Hide Details' : 'Show Details'
                }
              />

              {visibleInfo === 'details' && (
                <div>
                  <p>{currentProduct.details}</p>
                </div>
              )}
            </section>
          </article>
        </main>
      </StyledProduct>
      <CartQuickView />
    </Layout>
  );
}

export default ProductDetail;
