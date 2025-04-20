import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA1WVtEnJTfuKqrJlYWCsZSLKcXdP3t38g",
    authDomain: "backend-25b8e.firebaseapp.com",
    projectId: "backend-25b8e",
    storageBucket: "backend-25b8e.firebasestorage.app",
    messagingSenderId: "1045129551216",
    appId: "1:1045129551216:web:46ce35e6fbe550d0e243b5",
    measurementId: "G-JJWC7Y8K5H",
    databaseURL: "https://backend-25b8e-default-rtdb.firebaseio.com"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
auth.languageCode = 'en'
export { app }