//TODO - Import the functions from the firebase SDKs.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"
//TODO - Add SDK's for firebase products

//NOTE - your web app's firebase config

const firebaseConfig = {
    apiKey: "AIzaSyAqGei38kGDRUcMqVXtI4n8LM_Ec-Jg7Io",
    authDomain: "testfirebase-15d74.firebaseapp.com",
    projectID: "testfirebase-15d74",
    storageBucket: "testfirebase-15d74.appspot.com",
    messagingSenderID: "541838634287",
    appID: "1:541838634287:web:4cc61e3706dc51af6f85da",
    //measurementID: "",
};

// Initialize Firebase
const app = initalizeApp(firebaseConfig)