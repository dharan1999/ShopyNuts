import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc,setDoc,getDoc } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiFjJiMTanComhMCe2-oab2pK-8w0BTiE",
    authDomain: "shopynuts-db.firebaseapp.com",
    projectId: "shopynuts-db",
    storageBucket: "shopynuts-db.appspot.com",
    messagingSenderId: "879343754512",
    appId: "1:879343754512:web:02af36d113720575581995"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async  (userAuth) => {
    const userDocRef = doc(db,'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);

    if(!userSnapShot.exists()){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      }catch(error){
        console.log('error creating the user',error.message);
      }

    }
    return userDocRef;
  };
  
 