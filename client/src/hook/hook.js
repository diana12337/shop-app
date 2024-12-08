import { useEffect, useState } from 'react';
import { db, auth } from '../firebase.js';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function useShoppingCart(initialData = []) {
  const [userData, setUserData] = useState(initialData);
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
        const userDoc = doc(db, 'users', currentUser.uid);
        setUser(currentUser);

        try {
          const cartSnapshot = await getDoc(userDoc);
          const userElements = cartSnapshot.data();

          /*   if (cartData && cartData.items[0]) { */
          console.log('Cart data fetched from Firestore:', userElements.items);

          const mergedCart = [...localCart, ...userData.items];
          console.log('Merged cart data:', mergedCart);

          await setDoc(userDoc, { items: mergedCart }, { merge: true });
          setUserData(mergedCart);
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
        setUserData(localCart);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const setCartItems = async (newData) => {
    setUserData(newData);

    if (user) {
      try {
        const userDoc = doc(db, 'users', user.uid);
        await updateDoc(userDoc, {
          items: newData,
        });
        console.log('Cart updated successfully');
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    } else {
      window.localStorage.setItem('shoppingCart', JSON.stringify(newData));
    }
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
    console.log(existingCartItemIndex, 'cartindex');
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
