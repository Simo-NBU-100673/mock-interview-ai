// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq4_14Nv4BqhMKI_pwC2lrWJRaVEvu0fQ",
    authDomain: "prepwise-601e4.firebaseapp.com",
    projectId: "prepwise-601e4",
    storageBucket: "prepwise-601e4.firebasestorage.app",
    messagingSenderId: "1053922585149",
    appId: "1:1053922585149:web:00d2983179e287d6c25854",
    measurementId: "G-YEF632ME96"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore();