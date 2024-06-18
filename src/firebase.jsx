import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATVpMHGT9Ci5hL9kZSj5Tng_PFPgHQ90Y",
  authDomain: "store-tutor-7c782.firebaseapp.com",
  projectId: "store-tutor-7c782",
  storageBucket: "store-tutor-7c782.appspot.com",
  messagingSenderId: "390110959294",
  appId: "1:390110959294:web:af201a7515da89107bf0ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);