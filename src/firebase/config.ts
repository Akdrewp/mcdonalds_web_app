// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCgJmjZjULh5ySjoI2G_GQ_ZrQs5dqz4w",
    authDomain: "mcdonalds-app-12ae6.firebaseapp.com",
    projectId: "mcdonalds-app-12ae6",
    storageBucket: "mcdonalds-app-12ae6.appspot.com",
    messagingSenderId: "463497788217",
    appId: "1:463497788217:web:ed81a2d21e80680f4606e8",
    measurementId: "G-5Z4MRQH85N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// console.log("127.0.0.1 detected!");
// connectAuthEmulator(auth, "http://127.0.0.1:9099");
// connectFirestoreEmulator(db, "127.0.0.1", 8080);
// // TODO


const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);