import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
  } from '../../utils/firebase/firebase.utils';
  
  import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
  const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if(response) {
    //       const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
      
    // },[]);

    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      //console.log(response);
      const userDocRef = await createUserDocumentFromAuth(user);
      //createUserProfileDocument(response);
    };

    
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
        <SignUpForm />
      </div>
    );
  };
  
  export default SignIn;