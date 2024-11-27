import { useEffect, useState } from 'react';

export default function useStorage(productName, productsToUpdate = []) {
  const [productsLS, setProducts] = useState(productsToUpdate);

  useEffect(() => {
    const currentProducts = JSON.parse(
      window.localStorage.getItem(productName)
    );

    if (currentProducts === null || currentProducts.length === 0) {
      window.localStorage.setItem(
        productName,
        JSON.stringify(productsToUpdate)
      );
    } else {
      setProducts(currentProducts);
    }
  }, []);

  const setItemsLS = (data) => {
    setProducts(data);

    window.localStorage.setItem(productName, JSON.stringify(data));
  };
  const removeItem = (id) => {
    const itemsWithoutRemoved = productsLS.filter((item) => item.id !== id);

    setProducts(itemsWithoutRemoved);
    window.localStorage.setItem(
      productName,
      JSON.stringify(itemsWithoutRemoved)
    );
  };
  const findProductById = (id) => {
    return productsLS.find((product) => product.id === id);
  };
  const addItem = (newItem, product) => {
    const existingProductIndex = productsLS.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingProductIndex >= 0) {
      const di = productsLS.map((productLS) =>
        productLS.id === product.id
          ? { ...productLS, amount: productLS.amount + 1 }
          : productLS
      );
      setItemsLS(di);
    } else {
      const newS = [...productsLS, newItem];
      setItemsLS(newS);
    }
  };

  return [productsLS, setItemsLS, findProductById, addItem, removeItem];
}
