import React, { createContext, useReducer, useContext } from "react";
import authReducer from "../reducers/authReducer"; // Import the reducer

// Create Auth Context
const AuthContext = createContext();

// Initial state for authentication
const initialState = {
  user: null, // No user logged in initially
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login function
  const login = (userData) => {
    dispatch({ type: "LOGIN", payload: userData });
  };

  // Logout function
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext easily
export const useAuth = () => {
  return useContext(AuthContext);
};
