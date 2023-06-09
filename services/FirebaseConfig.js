// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGfgvDMwIhseF-_ZpHChH_5fp76bVxn_I",
    authDomain: "fuerza-g-32ca5.firebaseapp.com",
    databaseURL: "https://fuerza-g-32ca5-default-rtdb.firebaseio.com",
    projectId: "fuerza-g-32ca5",
    storageBucket: "fuerza-g-32ca5.appspot.com",
    messagingSenderId: "623026114835",
    appId: "1:623026114835:web:32a06f90f6050be15c8ae6",
    measurementId: "G-XPJLEDQZ94"
  };

// Initialize Firebase
let firebase_app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(firebase_app);
const db = getFirestore(firebase_app);
const auth = getAuth(firebase_app);

export { storage, db, auth };
