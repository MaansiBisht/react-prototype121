// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcesR9BR46tytcNNTeNxKSnLSZ8vR2QnA",
  authDomain: "react-parallax-5870b.firebaseapp.com",
  projectId: "react-parallax-5870b",
  storageBucket: "react-parallax-5870b.appspot.com",
  messagingSenderId: "1497014213",
  appId: "1:1497014213:web:279c496adeb62448d7b5ac",
  measurementId: "G-6LVB0MEGW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app;