import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDB6Mq5WFLHBoFhLA5rrmse8U0GKscsEh4",
    authDomain: "ecommerce-f236b.firebaseapp.com",
    projectId: "ecommerce-f236b",
    storageBucket: "ecommerce-f236b.appspot.com",
    messagingSenderId: "979592177597",
    appId: "1:979592177597:web:01c98233f2d81029d094d4",
    measurementId: "G-QDGPDG4XDT"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { auth, db, storage }