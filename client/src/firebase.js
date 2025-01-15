// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1b018.firebaseapp.com",
  projectId: "mern-blog-1b018",
  storageBucket: "mern-blog-1b018.firebasestorage.app",
  messagingSenderId: "184217625647",
  appId: "1:184217625647:web:34e4fff4e61c65e37d12da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
