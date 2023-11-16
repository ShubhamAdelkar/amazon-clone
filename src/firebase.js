// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvFKliXfkpMpss0pHQMWt39gw_Fq4xr-g",
    authDomain: "clone-2aa99.firebaseapp.com",
    projectId: "clone-2aa99",
    storageBucket: "clone-2aa99.appspot.com",
    messagingSenderId: "116597015336",
    appId: "1:116597015336:web:a9a5ea427211f0efdc861d",
    measurementId: "G-5S3QS3700S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };