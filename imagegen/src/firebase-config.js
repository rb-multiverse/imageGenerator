// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0MoqkhchbB74HWiIiP3cqYKQF4IFxnC4",
  authDomain: "imagegen-5f754.firebaseapp.com",
  projectId: "imagegen-5f754",
  storageBucket: "imagegen-5f754.appspot.com",
  messagingSenderId: "247378457647",
  appId: "1:247378457647:web:2cb3db6758135ce80202da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)
const API_TOKEN = "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"

export { Auth, Provider, db, storage, API_TOKEN };
