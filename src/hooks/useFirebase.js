import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

//initialize firebase app
firebaseInitialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    //register user 
    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                setError("");
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            })
            .finally(()=>setIsLoading(false));
    }

    //login user
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                setError("");
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(()=>setIsLoading(false));
    }

    //observe user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    //logOut user 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setError("");
        }).catch((error) => {
            // An error happened.
            setError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

    return {
        user,
        error,
        registerUser,
        loginUser,
        isLoading,
        logOut
    }
}
export default useFirebase;