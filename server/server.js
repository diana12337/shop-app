const express = require('express');
const Stripe = require('stripe');

const cors = require('cors');

const stripe = new Stripe(
  'sk_test_51QRDLCEE8OTGwyjySAvhOckf7D6yjDW75PVliC9AD1GHHk0vOj3fCUGMblKczTIRjr3kTlWUd1QPv72tu6k1p1CO00r82ta6TN',
  { apiVersion: '2020-08-27' }
);
const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const calculateOrderAmount = (items) => {
  let total = 0;
  items.forEach((item) => {
    total += item.amount;
  });
  return total;
};

app.post('/api/create-payment-intent', async (req, res) => {
  const { items } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
