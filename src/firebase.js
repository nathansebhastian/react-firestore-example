import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
});

const db = firebaseApp.firestore();

export {db};
