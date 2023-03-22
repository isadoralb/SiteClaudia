import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDBbe2zNxks83XzD1pGUO-jlhdtHPHcJ68",
  authDomain: "aulafirebase-3c423.firebaseapp.com",
  projectId: "aulafirebase-3c423",
  storageBucket: "aulafirebase-3c423.appspot.com",
  messagingSenderId: "393488786562",
  appId: "1:393488786562:web:fa594277500038dfecc09b",
  measurementId: "G-855GRQCHMK",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
