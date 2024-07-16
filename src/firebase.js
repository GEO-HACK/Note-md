import { initializeApp } from "firebase/app";
import { getFirestore , collection} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBybcD63R53MeRuqTOeqP-qE9u4l-TeF5U",
  authDomain: "react-notes-cec5f.firebaseapp.com",
  projectId: "react-notes-cec5f",
  storageBucket: "react-notes-cec5f.appspot.com",
  messagingSenderId: "433885734285",
  appId: "1:433885734285:web:18909c119185ebcbe489c4",
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
export const notesCollection = collection(db, "notes"); //pass in the name of the databse and the reference for the collection you want to pass to the collection
