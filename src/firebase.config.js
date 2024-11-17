import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDonS71M-cP90gHGbOOcuJmH0HNqb-1knE",
  authDomain: "happylife-banglore.firebaseapp.com",
  projectId: "happylife-banglore",
  storageBucket: "happylife-banglore.firebasestorage.app",
  messagingSenderId: "324499389160",
  appId: "1:324499389160:web:9852ecdab7a8a4aa8d675d",
  measurementId: "G-9NPG1MD985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics }; 