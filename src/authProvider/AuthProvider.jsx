import { useState } from "react";
import { AuthContext } from "../contextAip/ContextCreate";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provideInfo = {
    name: "shrabon",
    user,
    setUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={provideInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
