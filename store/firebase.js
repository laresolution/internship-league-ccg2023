import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration options
  apiKey: "AIzaSyCb54FM0ibSDP40a47K-VtUsroV5ri7bGE",
  authDomain: "internship-league.firebaseapp.com",
  projectId: "internship-league",
  storageBucket: "internship-league.appspot.com",
  messagingSenderId: "119738330715",
  appId: "1:119738330715:web:7338ebe71884d60944d97e",
  measurementId: "G-WET57SG6NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
