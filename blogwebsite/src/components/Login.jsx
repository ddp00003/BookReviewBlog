import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'; // Ensure the correct path to firebase.js

const Login = () => {
    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
  
        // Store user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }, { merge: true });
  
        console.log('User signed in successfully');
        // You can add additional logic here, like updating global state
      } catch (error) {
        console.error('Error signing in with Google', error);
        // You can add error handling logic here
      }
    };
    const handleLoginClick = (e) => {
        e.preventDefault();
        signInWithGoogle();
    };
  return (
    
    
    <a href="#!" className="google-signin-link" onClick={handleLoginClick}>
      Login
    </a>
   
  );
}

export default Login;
