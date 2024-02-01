// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern--oauth.firebaseapp.com",
  projectId: "mern--oauth",
  storageBucket: "mern--oauth.appspot.com",
  messagingSenderId: "542421359619",
  appId: "1:542421359619:web:f1980b4b22a82f4af74236",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
