// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa2uTFI4YvyZqZ0HF4ANghnhhaUEA4Fv0",
  authDomain: "bloodfinder-c6d1e.firebaseapp.com",
  projectId: "bloodfinder-c6d1e",
  storageBucket: "bloodfinder-c6d1e.appspot.com",
  messagingSenderId: "428787010680",
  appId: "1:428787010680:web:d18f3ae8004ca991ba718d",
  measurementId: "G-3K77XSG3PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;