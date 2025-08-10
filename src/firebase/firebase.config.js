import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEaEnd3sI1XZutcDHxGMQSdzMBPsB5dfQ",
  authDomain: "scic-877fe.firebaseapp.com",
  projectId: "scic-877fe",
  storageBucket: "scic-877fe.firebasestorage.app",
  messagingSenderId: "1030736335865",
  appId: "1:1030736335865:web:6590ed5a3c0a129693a328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
