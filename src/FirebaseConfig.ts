import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeTdGfMUvGXQ_V2-lCWjwgGA56GG19-sE",
  authDomain: "porto-b88f0.firebaseapp.com",
  projectId: "porto-b88f0",
  storageBucket: "porto-b88f0.firebasestorage.app",
  messagingSenderId: "1065581071371",
  appId: "1:1065581071371:web:413cffe9c6e5dc14e40b0e",
  measurementId: "G-4CPKJRC9H7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);