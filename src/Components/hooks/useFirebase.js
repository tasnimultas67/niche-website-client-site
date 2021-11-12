import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';



// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [user, setUser] = useState({});
    const auth = getAuth();


  const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) =>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('')
            const newUser = {email, displayName: name};
            setUser(newUser);
            updateProfile(auth.currentUser, {
              displayName: name,
            }).then(() => {
            })
            .catch((error) => {
            });
            
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message)
            // ..
          })
          .finally(()=> setIsLoading(false))

        }

    const loginUser = (email, password, location, history)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const destination = location.state?.from || '/';
            history.replace(destination)
            setAuthError('')
            // ...
            })
            .catch((error) => {
                setAuthError(error.message)
              })
              .finally(()=> setIsLoading(false))

    }

// Login with   GOOGLE
    const signInWithGoogle = (location, history)=>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    const destination = location.state?.from || '/';
    history.replace(destination)
    setAuthError("");

  }).catch((error) => {
    setAuthError(error.message)
  })
  .finally(()=> setIsLoading(false))


    }



        //   observer user state
          useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                  // const uid = user.uid;
                  setUser(user)
                } else {
                  setUser({})
                }
                setIsLoading(false)
              });
              return () => unsubscribe;
          },[auth]);


    const logout = () =>{
      setIsLoading(true)
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          })
        .catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false))

    }



    return {
        user,
        isLoading,
        authError,
        signInWithGoogle,
        registerUser,
        logout,
        loginUser,

    }


}

    export default useFirebase;