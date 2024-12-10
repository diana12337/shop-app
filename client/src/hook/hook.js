import { useEffect, useState } from 'react';
import { auth } from '../firebase.js';

import { onAuthStateChanged } from 'firebase/auth';

export default function useShoppingCart(initialData = []) {
  const [userData, setUserData] = useState(initialData);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      const localCart =
        JSON.parse(window.localStorage.getItem('shoppingCart')) || [];

      setUserData(localCart);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const setCartItems = async (newData) => {
    setUserData(newData);

    window.localStorage.setItem('shoppingCart', JSON.stringify(newData));
  };

  const removeCartItem = (id) => {
    const updatedCart = userData.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const findCartItemById = (id) => userData.find((item) => item.id === id);

  const addCartItem = (newItem) => {
    const existingCartItemIndex = userData.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingCartItemIndex >= 0) {
      const updatedCart = userData.map((item) =>
        item.id === newItem.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      const updatedCart = [...userData, newItem];
      setCartItems(updatedCart);
    }
  };

  const subtractCartItem = (currentItem) => {
    const updatedCart = userData.map((item) =>
      item.id === currentItem.id
        ? { ...item, amount: item.amount > 1 ? item.amount - 1 : item.amount }
        : item
    );
    setCartItems(updatedCart);
  };

  return [
    userData,
    user,
    setCartItems,
    findCartItemById,
    addCartItem,
    removeCartItem,
    subtractCartItem,
  ];
}
