import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // LOADING ROLES from firebase
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.exists() ? userDoc.data() : {};

      setLoggedInUser({ ...user, role: userData.role });
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  const signup = async (email, password, role = "user") => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // save user role into firebase
      await setDoc(doc(db, "users", user.uid), { role });

      setLoggedInUser({ ...user, role });
    } catch (error) {
      console.error("Signup failed:", error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setLoggedInUser(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
