import React, { useEffect, useState } from 'react';
import initializeFirebaseApp from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeFirebaseApp();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    // const [isLoading, setIsLoading] = useState(true);

    const signInUsingGoogle = () => {
        // setIsLoading(true);
        // const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        // .then((result) => setUser(result.user))
        // .then((result) =>{
        //     const {displayName}= result.user;
        // };
        //  setUser(result.user))
        // .catch ((error) => setError(error.message))

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setError('');
            }
        });
    }, [])


    return {
        user,
        error,
        logOut,
        signInUsingGoogle
    };

};

export default useFirebase;