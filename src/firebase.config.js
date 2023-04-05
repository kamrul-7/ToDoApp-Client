// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAxeu6XZqY-YWhRNKIdsj4TQrmBAuudsA",
  authDomain: "crud-operation-cddeb.firebaseapp.com",
  projectId: "crud-operation-cddeb",
  storageBucket: "crud-operation-cddeb.appspot.com",
  messagingSenderId: "329766830942",
  appId: "1:329766830942:web:ed5531fc66fa8b2ec185cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;