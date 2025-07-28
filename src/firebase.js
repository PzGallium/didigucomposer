// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqG319qFT12VwL2GZU_0uBpeg5LTzXlhc",
  authDomain: "firstproject-7fc2b.firebaseapp.com",
  projectId: "firstproject-7fc2b",
  storageBucket: "firstproject-7fc2b.firebasestorage.app",
  messagingSenderId: "133455183087",
  appId: "1:133455183087:web:cc93c198a0664899586f1a",
  measurementId: "G-EPXZ7GHQC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);