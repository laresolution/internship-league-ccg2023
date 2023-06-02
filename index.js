
const { doc, deleteDoc, getFirestore } = require("firebase/firestore");


const { initializeApp } = require ("firebase/app"); 
const firebaseConfig = {
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

// Delete a document
const deleteDocument = async () => {
    try {
      await deleteDoc(doc(db, "products", "315158ec-7f98-45e8-ba45-ad4650166f28"));
      console.log("Document deleted successfully!"); 
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  
  deleteDocument();