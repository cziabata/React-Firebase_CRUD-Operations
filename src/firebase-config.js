import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Firebase config (taking from initializing process Firebase App)
const firebaseConfig = {
  apiKey: "AIzaSyDTcyytfALWnZZf8J48zfhYYGI4g1zMYC8",
  authDomain: "react-firebase-chat-b5ebf.firebaseapp.com",
  projectId: "react-firebase-chat-b5ebf",
  storageBucket: "react-firebase-chat-b5ebf.appspot.com",
  messagingSenderId: "261783425051",
  appId: "1:261783425051:web:a25284152e56df2910a8be",
  measurementId: "G-D226H0KXN3"
};

// Initialize Firebase App, Authentication, Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);