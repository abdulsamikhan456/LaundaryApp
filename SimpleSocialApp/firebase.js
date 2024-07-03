
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoQfJuzhBEJ-kwxAMvRzTiZL2ANncHUyQ",
  authDomain: "socialapp-79707.firebaseapp.com",
  projectId: "socialapp-79707",
  storageBucket: "socialapp-79707.appspot.com",
  messagingSenderId: "433231494200",
  appId: "1:433231494200:web:4620bee89c4ac8c83f7acd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

const db = getFirestore();

export {auth,db};