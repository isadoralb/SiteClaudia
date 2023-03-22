// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBbe2zNxks83XzD1pGUO-jlhdtHPHcJ68",
  authDomain: "aulafirebase-3c423.firebaseapp.com",
  projectId: "aulafirebase-3c423",
  storageBucket: "aulafirebase-3c423.appspot.com",
  messagingSenderId: "393488786562",
  appId: "1:393488786562:web:fa594277500038dfecc09b",
  measurementId: "G-855GRQCHMK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
