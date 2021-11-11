import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";



// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [user, setUser] = useState({});
    const auth = getAuth();

    const registerUser = (email, password) =>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('')

          })
          .catch((error) => {
            setAuthError(error.message)
            // ..
          })
          .finally(()=> setIsLoading(false))

        }

    const loginUser = (email, password)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            setAuthError('')
            // ...
            })
            .catch((error) => {
                setAuthError(error.message)
              })
              .finally(()=> setIsLoading(false))

    }

        //   observer user state
          useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                  const uid = user.uid;
                  setUser(user)
                } else {
                  setUser({})
                }
                setIsLoading(false)
              });
              return () => unsubscribe;
          },[]);


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
        registerUser,
        logout,
        loginUser,

    }


}

    export default useFirebase;