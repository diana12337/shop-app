import { useEffect, useState } from 'react';
import { db, auth } from '../firebase.js'; // Adjust the import path as necessary
import {
  /*  collection, getDocs, */ doc,
  setDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function useShoppingCart(initialData = []) {
  const [cart, setCart] = useState(initialData);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // User is logged in, fetch cart data from Firestore
        const cartDoc = doc(db, 'carts', currentUser.uid);
        setUser(currentUser);
        const cartSnapshot = await getDoc(cartDoc);

        if (cartSnapshot.exists()) {
          setCart(cartSnapshot.data().items);
        } else {
          // If no cart exists in Firestore, initialize with initial data
          await setDoc(cartDoc, { items: initialData });
          setCart(initialData);
        }
        setUser(currentUser);
      } else {
        // User is not logged in, use local storage
        const localCart =
          JSON.parse(window.localStorage.getItem('shoppingCart')) ||
          initialData;
        setCart(localCart);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const setCartItems = async (newData) => {
    setCart(newData);
    console.log(newData, 'newData');
    if (user) {
      // Save cart data to Firestore
      try {
        const cartDoc = doc(db, 'carts', user.uid);
        await updateDoc(cartDoc, {
          items: newData, // Update with new data
        });
        console.log('Cart updated successfully');
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    } else {
      // Save cart data to local storage
      window.localStorage.setItem('shoppingCart', JSON.stringify(newData));
    }
  };

  const removeCartItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const findCartItemById = (id) => cart.find((item) => item.id === id);

  const addCartItem = (newItem) => {
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingCartItemIndex >= 0) {
      const updatedCart = cart.map((item) =>
        item.id === newItem.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      const updatedCart = [...cart, newItem];
      setCartItems(updatedCart);
    }
  };

  return [
    cart,
    user,
    setCartItems,
    findCartItemById,
    addCartItem,
    removeCartItem,
  ];
}
