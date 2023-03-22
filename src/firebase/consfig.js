// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlKLA7v8otJKl5BPajazLTs9h-N9j1og0",
  authDomain: "blogzinho-f92f5.firebaseapp.com",
  projectId: "blogzinho-f92f5",
  storageBucket: "blogzinho-f92f5.appspot.com",
  messagingSenderId: "751822801675",
  appId: "1:751822801675:web:d4aeec5c394c00efd5300e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };