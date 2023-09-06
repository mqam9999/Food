import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyChOYta3whhTLDJjm8zbe_PYlvDug7b2tE",
    authDomain: "food-60ee1.firebaseapp.com",
    databaseURL: "https://food-60ee1-default-rtdb.firebaseio.com",
    projectId: "food-60ee1",
    storageBucket: "food-60ee1.appspot.com",
    messagingSenderId: "264535743890",
    appId: "1:264535743890:web:f0dd47d6ff635d95fdb54b"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  


  export {app,auth};