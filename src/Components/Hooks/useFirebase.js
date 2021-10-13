import firebaseInitialization from "../Firebase/firebase.initialize"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [loading, setIsLoading] = useState(true);

    const googleSignIn = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        setIsLoading(false);
    }, [])
    return {
        googleSignIn,
        logOut,
        setIsLoading,
        loading,
        user,
        error
    }
}
export default useFirebase;