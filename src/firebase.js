import firebase from 'firebase/app';

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

export default firebase;
