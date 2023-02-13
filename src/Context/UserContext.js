import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../utilities/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

export default function UserContext({ children }) {
  const user = { displayName: "admin" };

  // firebase signUp function
  const signUp = async (auth, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, signUp };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
