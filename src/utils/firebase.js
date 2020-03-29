import * as firebase from 'firebase';
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBGb6HIFVut6gUHBq_aDruZIOUJFy4xll4",
  authDomain: "communityclub-80725.firebaseapp.com",
  databaseURL: "https://communityclub-80725.firebaseio.com",
  projectId: "communityclub-80725",
  storageBucket: "communityclub-80725.appspot.com",
  messagingSenderId: "133545298974",
  appId: "1:133545298974:web:1d9dace8fe0381362ab20f",
  measurementId: "G-19KD6M8V7W"
});

firebase.analytics();

export const firestore = firebase.firestore();

