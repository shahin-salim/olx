import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyAxlfbiHYVQzt--Cs2HKoUZF7EFWYWIGAI",
     authDomain: "fir-a805d.firebaseapp.com",
     projectId: "fir-a805d",
     storageBucket: "fir-a805d.appspot.com",
     messagingSenderId: "544651580776",
     appId: "1:544651580776:web:5c80aafcbf1761eb9af2dd",
     measurementId: "G-QKLF70ZMEZ",
};

export default firebase.initializeApp(firebaseConfig);
