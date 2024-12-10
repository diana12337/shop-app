const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://shop-app-ddb47-default-rtdb.firebaseio.com',
});

const db = admin.firestore();

module.exports = { admin, db };
