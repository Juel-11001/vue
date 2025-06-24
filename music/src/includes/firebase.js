import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCECER_igk7YV0VZIP-u5n9FyFi0XzrHuM",
  authDomain: "music-app-81bfc.firebaseapp.com",
  projectId: "music-app-81bfc",
  storageBucket: "music-app-81bfc.firebasestorage.app",
  messagingSenderId: "1094332792336",
  appId: "1:1094332792336:web:8ce546cac36c32a5715495"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const db=firebase.firestore();
const usersCollection=db.collection('users');
export{
  auth,
  db,
  usersCollection
}
