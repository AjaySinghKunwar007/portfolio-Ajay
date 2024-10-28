// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPB7AO0Ix3zH0kMFn5QQH5wOCkcbSxm9A",
  authDomain: "react-portfolio-ajay.firebaseapp.com",
  projectId: "react-portfolio-ajay",
  storageBucket: "react-portfolio-ajay.appspot.com",
  messagingSenderId: "134300260479",
  appId: "1:134300260479:web:ce18e815e070ff2d54874a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()