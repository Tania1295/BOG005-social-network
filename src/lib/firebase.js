// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import config from './config.js';
// import { getFirestore } from 'firebase/firestore';


initializeApp(config);
export const auth = getAuth();

export const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const loginOut = signOut(auth);

export const provider = new GoogleAuthProvider();

export const popUp = signInWithPopup(auth, provider);

// const db = getFirestore(firebaseApp);

/* onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Logged in!');
  } else {
    console.log('No User');
  }
})
 */