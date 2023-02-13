import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../utilities/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

export default function UserContext({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // firebase signUp function
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  //Firebase Sign In function
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Firebase Sign Out function
  const logOut = (email, password) => {
    return signOut(auth);
  };

  const authInfo = { user, loading, signUp, logIn, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
