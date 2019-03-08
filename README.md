## Screenshot

![React-firestore demo](screenshot/screenshot_1.png)

This project shows you how to integrate Firestore into your React application for saving data.

View the tutorial of this app [here](https://sebhastian.com/react-firestore/).

This project is bootstrapped using Create React App and Bootstrap. In the project directory, you can run:

### `npm install`

To install all node modules required by this project

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Don't forget to add your Firebase credential

Or the demo will not work. Put it in the `firebase.js` file:

```js
const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  apiKey: '{YOUR CREDENTIAL}',
  authDomain: '{YOUR CREDENTIAL}',
  databaseURL: '{YOUR CREDENTIAL}',
  projectId: '{YOUR CREDENTIAL}',
  storageBucket: '{YOUR CREDENTIAL}',
  messagingSenderId: '{YOUR CREDENTIAL}',
});
```

Learning about React? Check out my book [React Distilled](https://sebhastian.com/react-distilled/)