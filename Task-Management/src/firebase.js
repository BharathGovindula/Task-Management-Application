import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsIzkrIWgMIfEKLs0y_K1zs5uOh6ll_g",
  authDomain: "task-management-applicat-6ed13.firebaseapp.com",
  projectId: "task-management-applicat-6ed13",
  storageBucket: "task-management-applicat-6ed13.firebasestorage.app",
  messagingSenderId: "115691448594",
  appId: "1:115691448594:web:59b45b756bcb382d562bcb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);