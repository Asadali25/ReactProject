// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaiGQpNN1XQagVVukAjwmPMada0NJv99E",
  authDomain: "saida-netflixgpt.firebaseapp.com",
  projectId: "saida-netflixgpt",
  storageBucket: "saida-netflixgpt.appspot.com",
  messagingSenderId: "446230885761",
  appId: "1:446230885761:web:30819641b0cacffeda6480",
  measurementId: "G-1BZJDXC8RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();