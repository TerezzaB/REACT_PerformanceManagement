import React, { createContext, useContext, useState } from "react";

// Creating context
const AuthContext = createContext();

// Context provider for authentification
export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (user) => {
    setLoggedInUser(user);
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for using AuthContext in components
export const useAuth = () => useContext(AuthContext);
