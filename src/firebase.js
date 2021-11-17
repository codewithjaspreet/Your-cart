// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCW2OEd4G89dqAbueRmTDc4UaA3aT1QS78",
  authDomain: "your---cart.firebaseapp.com",
  projectId: "your---cart",
  storageBucket: "your---cart.appspot.com",
  messagingSenderId: "168443327859",
  appId: "1:168443327859:web:90d4d3ec658e3e98f60106",
  measurementId: "G-G4HFYFK3S1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
