// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged ,signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsEGKvDIRaefVjnBj2LgSHJ4GMjpNmfxI",
  authDomain: "netflix-react-clone-583c8.firebaseapp.com",
  projectId: "netflix-react-clone-583c8",
  storageBucket: "netflix-react-clone-583c8.appspot.com",
  messagingSenderId: "309037620817",
  appId: "1:309037620817:web:f59b792e0c93b9dbdea270"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = app.firestore();
const auth = getAuth(app);
const createID = createUserWithEmailAndPassword;
const signInwithEP = signInWithEmailAndPassword;
const authStateChecker = onAuthStateChanged;
const logOut = signOut;

export { auth ,createID , signInwithEP ,authStateChecker , logOut};
// export default db;