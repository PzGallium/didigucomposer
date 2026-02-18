// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_eJ2Uw_u-a2MPszmmm4q5JgR9QKeuIgc",
  authDomain: "didigucomposer.firebaseapp.com",
  projectId: "didigucomposer",
  storageBucket: "didigucomposer.firebasestorage.app",
  messagingSenderId: "922245555946",
  appId: "1:922245555946:web:323d5beca0eccc4312d993",
  measurementId: "G-7BD85V3YTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);