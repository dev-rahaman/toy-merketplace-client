/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase_config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const GoogleSignIn = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = () => {
    setLoading(true);
    return updateProfile(auth.user);
  };

  const logOut = (email, password) => {
    setLoading(true);
    return signOut(auth, email, password);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (loggedUser) => {
      setLoading(false);
      setUser(loggedUser);
    });
    return () => {
      return unsubscribed();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    updateUser,
    GoogleSignIn,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
