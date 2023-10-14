// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmHvVZk_IT_0E1q1XZNM2LB5yP8w8Vfw8",
  authDomain: "fireauth-3.firebaseapp.com",
  databaseURL: "https://fireauth-3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fireauth-3",
  storageBucket: "fireauth-3.appspot.com",
  messagingSenderId: "1059763693651",
  appId: "1:1059763693651:web:d16277495c44ce0e693ea6",
  measurementId: "G-SL1GZSTPDH"
};

// Initialize Firebase
const Fapp = initializeApp(firebaseConfig);

export default Fapp;