// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCe_GxNOKPP4dUp6sSa1Yy-fyFCjryj7KM",
    authDomain: "user-administration-dff86.firebaseapp.com",
    projectId: "user-administration-dff86",
    storageBucket: "user-administration-dff86.firebasestorage.app",
    messagingSenderId: "55995338620",
    appId: "1:55995338620:web:7d128d57d0b61ef185def9",
    measurementId: "G-WTCLCY1RB6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
