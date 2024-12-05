// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMQPPOeIQfr7qtKO5WxNv_eCyNEwNKLiA",
  authDomain: "chill-gamer-5e99b.firebaseapp.com",
  projectId: "chill-gamer-5e99b",
  storageBucket: "chill-gamer-5e99b.firebasestorage.app",
  messagingSenderId: "747862847563",
  appId: "1:747862847563:web:58d8c0c63ebc5dc8871dce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
