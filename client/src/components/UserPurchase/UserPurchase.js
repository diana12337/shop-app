import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase.js';

import StyledUserPurchase from './UserPurchase.styled.js';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

const UserPurchase = () => {
  /*  const [user, setUser] = useState(null); */
  const [purchases, setPurchases] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchUserPurchases = async (userId) => {
      try {
        const purchasesCollection = collection(db, 'purchases');
        const userPurchasesQuery = query(
          purchasesCollection,
          where('userId', '==', userId)
        );
        const querySnapshot = await getDocs(userPurchasesQuery);

        const userPurchases = [];
        querySnapshot.forEach((doc) => {
          userPurchases.push({ id: doc.id, ...doc.data() });
        });

        setPurchases(userPurchases);
      } catch (error) {
        console.error('Error fetching user purchases:', error);
      }
    };

    const userId = auth.currentUser ? auth.currentUser.uid : 'unknown';

    if (userId !== 'unknown') {
      /*   setUser(auth.currentUser); */
      fetchUserPurchases(userId);
    }
  }, [db]);

  const formatDate = (timestamp) => {
    const date = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
    );
    return date.toLocaleString();
  };
  return (
    <StyledUserPurchase>
      <h3>Purchase History</h3>
      {purchases && purchases.length > 0
        ? purchases.map((purchase) => (
            <div key={purchase.id}>
              <h4>Date: {formatDate(purchase.createdAt)}</h4>
              <p>Total price: ${(purchase.amount / 100).toFixed(2)}</p>

              <ul>
                {purchase.cart.map((product) => (
                  <li key={product.id}>
                    <img src={product.image} alt={product.name} />

                    <p>{product.name}</p>
                    <p> ${product.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))
        : 'no purchase history'}
    </StyledUserPurchase>
  );
};

export default UserPurchase;
