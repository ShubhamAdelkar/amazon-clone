// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0kyyMeKSjIFR1ZH9dGrJ25mgY59n5BBk",
    authDomain: "clone-9beab.firebaseapp.com",
    projectId: "clone-9beab",
    storageBucket: "clone-9beab.appspot.com",
    messagingSenderId: "769378758558",
    appId: "1:769378758558:web:a8c33d8dd7941c8bc4708f",
    measurementId: "G-4JB4KKMHRB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };