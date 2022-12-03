import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyArbWeFN_1OPDcZTR7sCmynqAgthSxwbVg",
    authDomain: "elibrary-de274.firebaseapp.com",
    projectId: "elibrary-de274",
    storageBucket: "elibrary-de274.appspot.com",
    messagingSenderId: "1017739791073",
    appId: "1:1017739791073:web:8790d2e77fc6a41d5985a0"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
