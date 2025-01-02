import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCliw5oiSE5eYnA50FhiFyRqrg7z35mKEs",
  authDomain: "kpi-project-55c57.firebaseapp.com",
  projectId: "kpi-project-55c57",
  storageBucket: "kpi-project-55c57.firebasestorage.app",
  messagingSenderId: "1056001668015",
  appId: "1:1056001668015:web:deaf74ca195d5aa58f755a",
  measurementId: "G-JPT43XVJ8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporting firebase auth and firestore 
export const auth = getAuth(app);
export const db = getFirestore(app);
