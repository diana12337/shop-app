const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://shop-app-ddb47-default-rtdb.firebaseio.com',
});

const db = admin.firestore();

module.exports = { admin, db };
