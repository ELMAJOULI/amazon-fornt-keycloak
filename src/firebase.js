import firebase from "firebase";

const firbaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcO6CLUgSba-s5QhqeHzicDVB_hpXi-vk",
    authDomain: "clone-ebfea.firebaseapp.com",
    databaseURL: "https://clone-ebfea.firebaseio.com",
    projectId: "clone-ebfea",
    storageBucket: "clone-ebfea.appspot.com",
    messagingSenderId: "153942077324",
    appId: "1:153942077324:web:b95542decc907ca1dd30a9",
    measurementId: "G-QXNHPYJWKV"  
});
const db = firbaseApp.firestore();
const auth = firebase.auth();

export {db,auth};