import firebase from "firebase/app"
import "firebase/auth"
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
export default firebase.initializeApp(firebaseConfig);
