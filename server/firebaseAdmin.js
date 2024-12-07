const admin = require('firebase-admin');
const serviceAccount = require('./key.json'); // Replace with the path to your Firebase service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://shop-app-ddb47-default-rtdb.firebaseio.com', // Replace with your Firebase database URL
});

const db = admin.firestore();

module.exports = { admin, db };
