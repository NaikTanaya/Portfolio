import {initializeApp} from "firebase/app";
import { getFirestore } from "@firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyAvozKGcx0VVtqnQEBQhNl_D8kv0gXYfYM",
    authDomain: "portfolio-fae7a.firebaseapp.com",
    projectId: "portfolio-fae7a",
    storageBucket: "portfolio-fae7a.appspot.com",
    messagingSenderId: "375662378585",
    appId: "1:375662378585:web:6f834ef05c330e058e3b48",
  } ;

  const app = initializeApp(firebaseConfig) ;
  export const db = getFirestore(app);