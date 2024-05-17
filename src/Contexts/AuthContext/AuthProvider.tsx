import { FC, PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser, auth } from "@/Firebase";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(getCurrentUser());

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
