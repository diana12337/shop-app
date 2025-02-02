import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'shop-app-ddb47.firebaseapp.com',
  databaseURL: 'https://shop-app-ddb47-default-rtdb.firebaseio.com',
  projectId: 'shop-app-ddb47',
  storageBucket: 'shop-app-ddb47.appspot.app',
  messagingSenderId: '423187148557',
  appId: '1:423187148557:web:1138b00056e7139a158a44',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
