import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app, 'media');
const storage = getStorage(app);

// Analytics is optional and is not available in every browser or test environment.
if (typeof window !== 'undefined') {
  isSupported()
    .then((supported) => {
      if (supported) getAnalytics(app);
    })
    .catch(() => {});
}

export { app, auth, db, storage };
