// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH8aVDInCMFRtIyGyeiWH6AjcfxPgduLg",
  authDomain: "flashcardsaas-3ab31.firebaseapp.com",
  projectId: "flashcardsaas-3ab31",
  storageBucket: "flashcardsaas-3ab31.appspot.com",
  messagingSenderId: "920957810033",
  appId: "1:920957810033:web:af469ff78a3463b429f2d0",
  measurementId: "G-WZ2GC8SCP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}