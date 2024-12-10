const express = require('express');
const Stripe = require('stripe');

const cors = require('cors');
require('dotenv').config();

const stripeApiKey = process.env.STRIPE_SECRET_API_KEY;

const { admin, db } = require('./firebaseAdmin');
const stripe = new Stripe(
  stripeApiKey,

  { apiVersion: '2020-08-27' }
);

const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

const savePurchaseData = async (purchaseData) => {
  const purchaseDocument = {
    ...purchaseData,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  const docRef = db.collection('purchases').doc();

  await docRef.set(purchaseDocument);
};
const calculateOrderAmount = (userData, shipping) => {
  if (!userData || !Array.isArray(userData)) {
    throw new Error('Cart is not defined or is not an array');
  }

  const totalAmount =
    userData.reduce(
      (accumulator, product) => accumulator + product.price * product.amount,
      0
    ) + Number(shipping);

  if (isNaN(totalAmount)) {
    throw new Error('Amount is not defined or is not a number');
  }

  return Math.round(totalAmount * 100);
};

app.post('/api/create-payment-intent', async (req, res) => {
  const { userData, shipping, userId } = req.body;

  try {
    if (!userData || !Array.isArray(userData)) {
      throw new Error('Cart is not defined or is not an array');
    }

    const amount = calculateOrderAmount(userData, shipping);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message, details: error.stack });
  }
});

app.post('/api/save-purchase', async (req, res) => {
  const purchaseData = req.body;

  try {
    await savePurchaseData(purchaseData);

    res.json({ message: 'Purchase data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message, details: error.stack });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
