import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

/* import products from '../db/db.json' assert { type: 'json' }; */

import { readFileSync } from 'fs'; // Import fs module to read files
import path from 'path'; // Import path module for handling file paths

const firebaseConfig = {
  apiKey: 'AIzaSyCK2D0EkVY3DpbWVhDPWGfMBKiMQ9qSI9M',
  authDomain: 'shop-app-ddb47.firebaseapp.com',
  databaseURL: 'https://shop-app-ddb47-default-rtdb.firebaseio.com',
  projectId: 'shop-app-ddb47',
  storageBucket: 'shop-app-ddb47.appspot.app',
  messagingSenderId: '423187148557',
  appId: '1:423187148557:web:1138b00056e7139a158a44',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Read and parse the JSON file

const loadJSONData = () => {
  const filePath = path.resolve('../db/db.json'); // Adjust the path as needed
  try {
    const data = readFileSync(filePath, 'utf-8');
    console.log('Raw JSON Data:', data); // Log raw JSON data
    const parsedData = JSON.parse(data);
    console.log('Parsed JSON Data:', parsedData); // Log parsed JSON data
    return parsedData;
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return null; // Return null in case of error
  }
};

/* const populateFirestore = async () => {
  const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

  for (const product of data.products) {
    await addDoc(collection(db, 'products'), product);
  }

  console.log('Firestore populated successfully');
}; */

/* const fetchExistingProducts = async () => {
  const productsRef = collection(db, 'products');
  const querySnapshot = await getDocs(productsRef);
  return querySnapshot.docs.map((doc) => ({
    firestoreId: doc.id,
    ...doc.data(),
  }));
};
 */
/* const migrateProductsToFirestore = async () => {
  const existingProducts = await fetchExistingProducts();

  for (const existingProduct of existingProducts) {
    const { firestoreId, ...productData } = existingProduct;

    const customId = products.products
      .find((product) => product.id === productData.id)
      ?.id.toString();

    if (customId) {
      const newDocRef = doc(db, 'products', customId);

      try {
        await setDoc(newDocRef, productData);
        console.log('Product added with custom ID:', customId);
        await deleteDoc(doc(db, 'products', firestoreId));
        console.log('Deleted old product with Firestore ID:', firestoreId);
      } catch (error) {
        console.error('Error processing product:', error);
      }
    }
  }
};
 */

const migrateProductsToFirestore = async () => {
  const products = loadJSONData();

  if (!products || !Array.isArray(products)) {
    console.error('Products data is not an array or is invalid.');
    return; // Exit the function if there's an error loading JSON data
  }

  for (const product of products) {
    const customId = product.id.toString();
    const newDocRef = doc(db, 'products', customId);

    try {
      await setDoc(newDocRef, product);
      console.log('Product added with custom ID:', customId);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }
};

migrateProductsToFirestore();
