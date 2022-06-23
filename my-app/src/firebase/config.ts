
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCfJYB6yB4bYqoZosQhKu0BfK1GKDm9tNg",
  authDomain: "typescript-d56bc.firebaseapp.com",
  databaseURL: "https://typescript-d56bc-default-rtdb.firebaseio.com",
  projectId: "typescript-d56bc",
  storageBucket: "typescript-d56bc.appspot.com",
  messagingSenderId: "11413491329",
  appId: "1:11413491329:web:2bf99dca9f86e1477b0780",
  measurementId: "G-K8L6H0TYVH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
export const storage = getStorage(app);