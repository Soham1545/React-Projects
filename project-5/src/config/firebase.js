// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGt_hOp_LfohKy9qH53pwzi0oYpE_hDF8",
  authDomain: "vite-contact-85f02.firebaseapp.com",
  projectId: "vite-contact-85f02",
  storageBucket: "vite-contact-85f02.appspot.com",
  messagingSenderId: "407718153205",
  appId: "1:407718153205:web:00cfa39d6cb8456aeb2ebc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);