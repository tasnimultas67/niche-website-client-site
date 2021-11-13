import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';



// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();


  const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) =>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            setAuthError('')
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user to the database
            saveUser(email, name, 'POST');
            updateProfile(auth.currentUser, {
              displayName: name,
            }).then(() => {
            })
            .catch(() => {
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
            .then(() => {
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
    // const user = result.user;
    saveUser(user.email, user.displayName, 'PUT')
    setAuthError("");
    const destination = location.state?.from || '/';
    history.replace(destination);

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

          useEffect(()=>{
            fetch(`http://localhost:5000/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>setAdmin(data.admin))
          },[user.email])

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

    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: method,
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }



    return {
      admin,
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