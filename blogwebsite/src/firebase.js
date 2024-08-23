import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ8fsLUtb9ziAjNK_Kw08fqUh12FeUjlM",
  authDomain: "book-review-blog-597ca.firebaseapp.com",
  projectId: "book-review-blog-597ca",
  storageBucket: "book-review-blog-597ca.appspot.com",
  messagingSenderId: "682501600716",
  appId: "1:682501600716:web:b0b4d66729e4ed59765969",
  measurementId: "G-YJPK1FEJNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

const storage = getStorage(app);

export { auth, db, storage };