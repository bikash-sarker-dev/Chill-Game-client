import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../contextAip/ContextCreate";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const accountRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const provideInfo = {
    user,
    setUser,
    loading,
    setLoading,
    accountRegister,
  };
  console.log(user);
  useEffect(() => {
    let unSubscribes = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unSubscribes();
  }, []);

  return (
    <AuthContext.Provider value={provideInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
