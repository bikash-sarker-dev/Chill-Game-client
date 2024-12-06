import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext, ThemeContext } from "../contextAip/ContextCreate";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const accountRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const accountLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const accountLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const provideInfo = {
    user,
    setUser,
    loading,
    setLoading,
    accountRegister,
    accountLogin,
    accountLogOut,
  };

  useEffect(() => {
    let unSubscribes = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unSubscribes();
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <AuthContext.Provider value={provideInfo}>
        {children}
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AuthProvider;
