// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "agatechweb.firebaseapp.com",
  projectId: "agatechweb",
  storageBucket: "agatechweb.firebasestorage.app",
  messagingSenderId: "752708496163",
  appId: "1:752708496163:web:8dede7ea898af740c3ba96"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);

export { db };