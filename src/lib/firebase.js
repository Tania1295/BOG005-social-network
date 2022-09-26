// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
//  updateProfile
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import config from './config.js';
// import { getFirestore } from 'firebase/firestore';

const app = initializeApp(config);
const auth = getAuth();
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
const loginOut = signOut(auth);
const provider = new GoogleAuthProvider();
const popUp = () => signInWithPopup(auth, provider);
// const profile = (auth, displayName) => updateProfile (auth.currentUser, displayName);

// const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log(user);
  } else {
    console.log('No User');
  }
});

export {app, createUser, loginUser, loginOut, provider, popUp, auth};