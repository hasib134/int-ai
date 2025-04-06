// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARZ79kvzQLeo3Lhu76RudksIyBtmePMug",
  authDomain: "interview-1d0f2.firebaseapp.com",
  projectId: "interview-1d0f2",
  storageBucket: "interview-1d0f2.firebasestorage.app",
  messagingSenderId: "187639411455",
  appId: "1:187639411455:web:119ebf420a5481c16b12ca",
  measurementId: "G-4B7KWJNV32"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);