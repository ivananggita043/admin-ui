import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutor.firebaseapp.com",
  projectId: "store-tutor",
  storageBucket: "store-tutor.appspot.com",
  messagingSenderId: "1005990988819",
  appId: "1:1005990988819:web:3b74aeb1c59fe64573c3e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();