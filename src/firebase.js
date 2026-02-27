// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdEfyHO4ObJYN_N3dsngAjzLPxeO-soto",
  authDomain: "realshoes-ab18c.firebaseapp.com",
  databaseURL: "https://realshoes-ab18c-default-rtdb.europe-west1.firebasedatabase.app/", // ← ¡URL CORRECTA!
  projectId: "realshoes-ab18c",
  storageBucket: "realshoes-ab18c.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); 