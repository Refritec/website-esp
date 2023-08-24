import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGLm3ggbKQ2ZXVtZzSzJq-j4U9U33CBFw",
  authDomain: "projetoesp-77cd6.firebaseapp.com",
  projectId: "projetoesp-77cd6",
  storageBucket: "projetoesp-77cd6.appspot.com",
  messagingSenderId: "1077732639734",
  appId: "1:1077732639734:web:60757cd7276a0abea63dd7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);