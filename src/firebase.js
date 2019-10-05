import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCD8bZjdzclVPQc5DH2JKMBpxeJByWqXGA",
    authDomain: "think-piece-52086.firebaseapp.com",
    databaseURL: "https://think-piece-52086.firebaseio.com",
    projectId: "think-piece-52086",
    storageBucket: "",
    messagingSenderId: "242863143367",
    appId: "1:242863143367:web:b4e11f0097bf7d82ec01e2",
    measurementId: "G-ZNX23K0DZX"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
