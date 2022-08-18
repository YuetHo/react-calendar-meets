// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACYngrGLhO-s-ZOet4Hg-_TtRbTTdY7XQ",
    authDomain: "headstarter-auth.firebaseapp.com",
    projectId: "headstarter-auth",
    storageBucket: "headstarter-auth.appspot.com",
    messagingSenderId: "510693647293",
    appId: "1:510693647293:web:543a34475de55c2422e8d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;