// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDlj7VhFu48SA0CcYX-4v1bNw4yJ5IlQH4",
  authDomain: "test-b-care.firebaseapp.com",
  projectId: "test-b-care",
  storageBucket: "test-b-care.firebasestorage.app",
  messagingSenderId: "153641116643",
  appId: "1:153641116643:web:3c3ccb24a86dc63c6df6d6"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
