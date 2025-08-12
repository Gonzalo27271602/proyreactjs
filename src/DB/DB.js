import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1bsFrncORt9tE8KOFwLEqP-HVyoaHazc",
  authDomain: "proyectoreacte-com.firebaseapp.com",
  projectId: "proyectoreacte-com",
  storageBucket: "proyectoreacte-com.firebasestorage.app",
  messagingSenderId: "237595128236",
  appId: "1:237595128236:web:004803b1d2e736917b0a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
