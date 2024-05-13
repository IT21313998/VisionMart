// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnvwlCufUCM4k71sF-IRO3IjAJfhwN7Lc",
  authDomain: "visionmart-495b1.firebaseapp.com",
  projectId: "visionmart-495b1",
  storageBucket: "visionmart-495b1.appspot.com",
  messagingSenderId: "892149469189",
  appId: "1:892149469189:web:e48211f2462453f231cc6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

