# ShoppApp

ShoppApp is an e-commerce platform that provides an effortless shopping experience for users. With a vast selection of products, intuitive navigation, and secure payment processing through Stripe, ShopApp makes online shopping easy and enjoyable.

<p align="center">
  <img src="./client/src/img/mainScreenshot.png" alt="Screenshot of mainPage width="700px">
</p>

## Installation

- The project uses node and npm. To run the app on your machine you should install all dependencies.

```bash
npm i
```

- To run a server follow the steps below:
  Navigate to the server directory:

```bash
cd server
```

Once you're in the server directory, run the command to start your server.

```bash
node server.js
```

After running the command, your server is ready at port http://localhost:4242

- To create a localhost port you should follow the steps below:

Navigate to the client directory:

```bash
cd client
```

Once you're in the client directory, run the following command:

```bash
npm start
```

ShoppApp is ready at port 3000.

```bash
http://localhost:3000/
```

## Managing API keys

- Stripe key
  The secret Stripe key is used to authenticate server-side requests to Stripe.

- Firebase Admin SDK key.json

The key.json file contains credentials for the Firebase Admin SDK, which allows the server to interact with Firebase securely.

Both the secret Stripe key and the key.json file are stored in the root of the server directory.

## Solutions provided in the app

The App enhances the user's experience thanks to the solutions provided in the form.

- For handling payment transactions Stripe was integrated
  The server includes an endpoint to create payment intents. This endpoint securely handles the secret Stripe key and creates a payment intent with the specified amount

<p align="center">
  <img src="./client/src/img/paymentScreenshot.png" alt="Screenshot of payment" width="400px">
</p>

- User panel enables users to manage their accounts by updating password and personal data and also viewing purchase transactions
<p align="center">
  <img src="./client/src/img/userPanelScreenshot.png" alt="Screenshot of puser panel" width="400px">
</p>

The app is responsive, ensuring a smooth shopping experience whether you’re on a desktop, tablet, or smartphone.
Clear, straightforward navigation and layout make it easy for users to find and purchase products.
Users can quickly view their cart contents without leaving the current page.

<p align="center">
  <img src="./client/src/img/quickViewScreenshot.png" alt="Screenshot of quickView" width="300px">
</p>

<p align="center">
  <img src="./client/src/img/productQuickViewScreenshot.png" alt="Screenshot of product quickView" width="300px">
</p>

- ShopApp uses Firebase for various backend services, enhancing the app's functionality and providing a seamless user experience:

Real-Time Database: Firebase Firestore is used to store and sync user data, ensuring real-time updates across the application.
Authentication: Firebase Authentication manages user sign-ups, logins, and secure access to user accounts.
Hosting: Firebase Hosting serves the static files of the client-side application, ensuring fast and secure delivery.
Admin SDK: The Firebase Admin SDK enables secure server-side operations, such as managing user data and interacting with Firestore.

## Special thanks

Special thanks to Akademia Samouka - akademiasamouka.pl for providing me with the task.

Any remarks are welcomed.
