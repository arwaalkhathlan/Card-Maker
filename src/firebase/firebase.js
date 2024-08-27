// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "card-maker-eid.firebaseapp.com",
  projectId: "card-maker-eid",
  storageBucket: "card-maker-eid.appspot.com",
  messagingSenderId: "700067206018",
  appId: process.env.REACT_APP_ID,
  measurementId: "G-28MK1ZBLMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth, app }