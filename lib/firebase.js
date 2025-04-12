// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvc1wvAANbwUgctABmT5MUk4zJ83zHoh4",
  authDomain: "goacarrentalpawan.firebaseapp.com",
  projectId: "goacarrentalpawan",
  storageBucket: "goacarrentalpawan.firebasestorage.app",
  messagingSenderId: "1087993141314",
  appId: "1:1087993141314:web:53ab05c18a459bd27035db",
  measurementId: "G-76EGL6MKEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);