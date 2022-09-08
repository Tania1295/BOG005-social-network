// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCwd_I9pnGtenncq4D3ADe2aqB2YwSqy54',
  authDomain: 'travelers-e8b5a.firebaseapp.com',
  projectId: 'travelers-e8b5a',
  storageBucket: 'travelers-e8b5a.appspot.com',
  messagingSenderId: '532240998590',
  appId: '1:532240998590:web:3ebe2040c59dda333dbeef',
  measurementId: 'G-KZ49QE41R7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
