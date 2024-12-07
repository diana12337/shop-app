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
  console.log('yes iam ');
  /*  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const cartDoc = doc(db, 'carts', currentUser.uid);
        setUser(currentUser);

        try {
          const cartSnapshot = await getDoc(cartDoc);
          const cartData = cartSnapshot.data();
          console.log(cartData, 'jereee');
          if (cartData && cartData.items) {
            console.log('Cart data fetched from Firestore:', cartData.items);
            setCart(cartData.items);
          } else {
            console.log(
              'No cart data found in Firestore. Initializing with initial data.'
            );
            await setDoc(cartDoc, { items: initialData });
            setCart(initialData);
          }
        } catch (error) {
          console.error('Error fetching or setting cart data:', error);
        }
      } else {
        const localCart =
          JSON.parse(window.localStorage.getItem('shoppingCart')) ||
          initialData;
        setCart(localCart);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
 */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Fetch local storage data
        const localCart =
          JSON.parse(window.localStorage.getItem('shoppingCart')) || [];

        // User is logged in, fetch cart data from Firestore
        const cartDoc = doc(db, 'carts', currentUser.uid);
        setUser(currentUser);

        try {
          const cartSnapshot = await getDoc(cartDoc);
          const cartData = cartSnapshot.data();

          /*   if (cartData && cartData.items[0]) { */
          console.log('Cart data fetched from Firestore:', cartData.items);

          const mergedCart = [...localCart, ...cartData.items];
          console.log('Merged cart data:', mergedCart);

          await setDoc(cartDoc, { items: mergedCart }, { merge: true });
          setCart(mergedCart);
          /* } else {
            console.log(
              'No cart data found in Firestore. Initializing with initial data.'
            );
            await setDoc(cartDoc, { items: initialData }, { merge: true });
            setCart(initialData);
          } */
        } catch (error) {
          console.error('Error fetching or setting cart data:', error);
        }
      } else {
        // User is not logged in, use local storage
        const localCart =
          JSON.parse(window.localStorage.getItem('shoppingCart')) || [];
        console.log('Cart data fetched from local storage:', localCart);
        setCart(localCart);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  /*   useEffect(() => {
    if (!user) {
      window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
  }, [cart, user]); */

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
    console.log(existingCartItemIndex, 'cartindex');
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
