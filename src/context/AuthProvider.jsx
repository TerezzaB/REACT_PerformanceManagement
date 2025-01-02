import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Funkcia na prihlásenie používateľa
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Načítanie údajov používateľa z Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        throw new Error("User data not found in Firestore");
      }

      const userData = userDoc.data();
      setLoggedInUser({ ...user, ...userData });
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  // Funkcia na registráciu nového používateľa
  const signup = async (first_name, last_name, email, password, role = "user") => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Uloženie údajov používateľa do Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        first_name,
        last_name,
        email,
        role,
        createdAt: new Date(),
      });

      setLoggedInUser({ uid: user.uid, email, first_name, last_name, role });
    } catch (error) {
      console.error("Signup failed:", error.message);
      throw error;
    }
  };

  // Funkcia na odhlásenie používateľa
  const logout = async () => {
    try {
      await signOut(auth);
      setLoggedInUser(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
      throw error;
    }
  };

  // Automatické prihlásenie pri zmene stavu používateľa
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Načítanie údajov používateľa z Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.exists() ? userDoc.data() : {};
        setLoggedInUser({ ...user, ...userData });
      } else {
        setLoggedInUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook na použitie AuthContext
export const useAuth = () => useContext(AuthContext);
