// Import the functions you need from the SDKs you need
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import config from './config.js';
import { getFirestore, doc, collection, getDocs, getDoc, addDoc, onSnapshot , deleteDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
import { onNavigate } from '../main.js';


const app = initializeApp(config);
const auth = getAuth();
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
const loginOut = () => signOut(auth);
const provider = new GoogleAuthProvider();
const popUp = () => signInWithPopup(auth, provider);
const profile = (user, displayName) => updateProfile(user, { displayName });

const dataFirestore = getFirestore(app);
const savePost = (post) => addDoc(collection(dataFirestore, "PostWall"), {post:post});
const getPost = () => getDocs(collection(dataFirestore, "PostWall"));
const onGetData = (callback) => onSnapshot(collection(dataFirestore, "PostWall"),callback);
const deletePost = id => deleteDoc(doc(dataFirestore, "PostWall", id));
const getEdit = id => getDoc(doc(dataFirestore, "PostWall", id));
const updtateEdit = (id, newPost) => updateDoc(doc(dataFirestore, "PostWall", id), newPost)


onAuthStateChanged(auth, (user) => {
  if (user)  {
    // const nameDisplay = document.querySelector(".nameUser");
    // userHdos.textContent = user.displayName;
    window.user = user;
    console.log(user);
    onNavigate("/wall");
    
  } else {
    console.log('No User');
    // onNavigate("/")
  }
}); 

export {
  app, createUser, loginUser, loginOut, provider, popUp, auth, profile, onAuthStateChanged, dataFirestore,
  collection, getDocs, addDoc, onGetData, getPost, savePost, deletePost, getEdit, updtateEdit
};