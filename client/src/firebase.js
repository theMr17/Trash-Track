// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBJyg93z8jr8UWaXr_eWrsLzU5ygrRapk",
    authDomain: "trash-track-a280d.firebaseapp.com",
    projectId: "trash-track-a280d",
    storageBucket: "trash-track-a280d.appspot.com",
    messagingSenderId: "1078155163883",
    appId: "1:1078155163883:web:582ded83582eac37b8a6ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
