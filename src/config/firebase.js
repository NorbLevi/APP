// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBfWZc_c8IA0MyfRynENc6-C4kWE6E5pL4",
  authDomain: "finaledit-2df54.firebaseapp.com",
  projectId: "finaledit-2df54",
  storageBucket: "finaledit-2df54.appspot.com",
  messagingSenderId: "444047000824",
  appId: "1:444047000824:web:981d36a513675f78a0270d",
  measurementId: "G-67MH7V6NLV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
