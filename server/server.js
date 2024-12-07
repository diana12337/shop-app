const express = require('express');
const Stripe = require('stripe');

const cors = require('cors');
const { admin, db } = require('./firebaseAdmin');
const stripe = new Stripe(
  'sk_test_51QRDLCEE8OTGwyjySAvhOckf7D6yjDW75PVliC9AD1GHHk0vOj3fCUGMblKczTIRjr3kTlWUd1QPv72tu6k1p1CO00r82ta6TN',
  { apiVersion: '2020-08-27' }
);
const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors({ origin: 'http://localhost:3000' }));

const savePurchaseData = async (purchaseData) => {
  const purchaseDocument = {
    ...purchaseData,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  const docRef = db.collection('purchases').doc();

  await docRef.set(purchaseDocument);
};
const calculateOrderAmount = (cart, shipping) => {
  if (!cart || !Array.isArray(cart)) {
    throw new Error('Cart is not defined or is not an array');
  }

  const totalAmount =
    cart.reduce(
      (accumulator, product) => accumulator + product.price * product.amount,
      0
    ) + Number(shipping);

  if (isNaN(totalAmount)) {
    throw new Error('Amount is not defined or is not a number');
  }
  console.log(totalAmount, 'amouncalcula');
  return Math.round(totalAmount * 100); // Convert to cents
};

app.post('/api/create-payment-intent', async (req, res) => {
  const { cart, shipping, userId } = req.body;

  try {
    console.log(
      'Received data:',
      JSON.stringify({ cart, shipping, userId }, null, 2)
    );

    if (!cart || !Array.isArray(cart)) {
      throw new Error('Cart is not defined or is not an array');
    }

    const amount = calculateOrderAmount(cart, shipping);
    console.log('Calculated amount:', amount);

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
    console.log(
      'Purchase data received:',
      JSON.stringify(purchaseData, null, 2)
    );

    await savePurchaseData(purchaseData);
    console.log('Purchase data saved:', purchaseData);

    res.json({ message: 'Purchase data saved successfully' });
  } catch (error) {
    console.error('Error saving purchase data:', error);
    res.status(500).json({ error: error.message, details: error.stack });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
