// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdEfyHO4ObJYN_N3dsngAjzLPxeO-soto",
  authDomain: "realshoes-ab18c.firebaseapp.com",
  projectId: "realshoes-ab18c",
  storageBucket: "realshoes-ab18c.firebasestorage.app",
  messagingSenderId: "75553610626",
  appId: "1:75553610626:web:8a45911dbcec3028258d9b",
  measurementId: "G-956PQWEZBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;