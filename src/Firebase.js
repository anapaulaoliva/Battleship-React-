import * as firebase from 'firebase/app';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyClCgHcXFuO7OBGkTIzsBROtkWDrBTOWCo",
    authDomain: "battleship-80272.firebaseapp.com",
    databaseURL: "https://battleship-80272.firebaseio.com",
    projectId: "battleship-80272",
    storageBucket: "battleship-80272.appspot.com",
    messagingSenderId: "1037899697036",
    appId: "1:1037899697036:web:e1f1d2f41f908250d664a9"
    });

//const firestore = firebase.firestore();

export default firebaseConfig;


