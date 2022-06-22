// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3PoucVHO36fnAsFXyZtnSmXvWRwSatd8",
    authDomain: "books-11f10.firebaseapp.com",
    projectId: "books-11f10",
    storageBucket: "books-11f10.appspot.com",
    messagingSenderId: "387194244379",
    appId: "1:387194244379:web:1f6db81254090c33ad17be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;