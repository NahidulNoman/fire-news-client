// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS-JkP4othul_Ky6hwVHi3XwkCQYA_ppM",
  authDomain: "fire-news-portal.firebaseapp.com",
  projectId: "fire-news-portal",
  storageBucket: "fire-news-portal.appspot.com",
  messagingSenderId: "174966544036",
  appId: "1:174966544036:web:f540ca2b62cba8db733831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;