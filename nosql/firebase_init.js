// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGONhrJ6VX7st8s4YxzyJU6c4BUFGZ5JA",
  authDomain: "activity-9afc6.firebaseapp.com",
  projectId: "activity-9afc6",
  storageBucket: "activity-9afc6.firebasestorage.app",
  messagingSenderId: "62248902505",
  appId: "1:62248902505:web:b76894321c1282deda67f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };