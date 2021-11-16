import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile  } from "firebase/auth";

//initialize firebase app
firebaseInitialize();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);

    const auth = getAuth();

    //register user 
    const registerUser = (name,email, password,location,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //name field add
                const newUser = {displayName:name,email};
                setUser(newUser);
                // save user to database
                saveUser(name,email);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName:name
                  }).then(() => {
                    // Profile updated!
                  }).catch((error) => {
                    // An error occurred
                  });
                //redirect user
                const destination = location?.state?.from || "/"
                history.replace(destination);
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
    const loginUser = (email, password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                //redirect user 
                const destination = location?.state?.from || "/"
                history.replace(destination);
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

    //save user info to database
    const saveUser =(displayName,email)=>{
        const userInfo = {displayName,email};
        fetch("http://localhost:5000/users",{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    //set Admin 
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])

    return {
        user,
        admin,
        error,
        registerUser,
        loginUser,
        isLoading,
        logOut
    }
}
export default useFirebase;